function SMSBid(name, phone, price) {
    this.name = name;
    this.phone = phone;
    this.price = price;
}
SMSBid.get_message_content = function (message_json) {
    return message_json.messages[0].message.substring(2).replace(/^\s+$/g, '');
}
SMSBid.save_jj_message_to_activities = function (message) {
    var activities = Activity.get_activities();
    var activity = Activity.get_present_activity();
    _.each(activity.biding, function (biding) {
        if (biding.bid_name == Bid.get_present_biding_name()) {
            biding.bid_people.unshift(message);
        }
    });
    _.map(activities, function (active) {
        if (active.active_name == activity.active_name) {
            active.biding = activity.biding;
        }
        return active
    });
    Activity.save_activities(activities);
}
SMSBid.refresh_biding = function (flag) {
    var page = document.getElementById(flag);
    if (page) {
        var scope = angular.element(page).scope();
        scope.$apply(function () {
            scope.bid_peoples();
        })
    }
}
SMSBid.judge_jj_phone_is_from_bm_phone = function (message_json) {
    return _.find(Activity.get_present_activity().apply_people, function (people) {
        return people.phone == message_json.messages[0].phone
    }) || false;
}
SMSBid.judge_jj_repeat = function (phone) {
    if (Bid.get_present_bid_peoples() != null) {
        return _.find(Bid.get_present_bid_peoples(), function (bid_people) {
            return bid_people.phone == phone;
        });
    } else {
        return false;
    }
}
SMSBid.reconstruct_jj_message = function (message_json) {
    var message_content = SMSBid.get_message_content(message_json);
    var bid_people = Bid.get_bid_people_by_phone(message_json.messages[0].phone);
    if (bid_people != null) {
        var message = new SMSBid(bid_people.name, message_json.messages[0].phone, message_content);
        return message;
    }
    return false;
}
SMSBid.judge_jj_content_is_price = function (message_json) {
    return !isNaN(SMSBid.get_message_content(message_json));
}
SMSBid.check_jj_activity = function (message) {
    SMSBid.jj_status_map[Bid.get_present_biding().bid_status](message);
}
SMSBid.jj_status_map = {
    'null': function () {
        console.log('对不起，竞价活动还没开始！');
    },
    'yellow': function (message) {
        if (!SMSBid.judge_jj_repeat(message.phone)) {
            SMSBid.save_jj_message_to_activities(message);
            SMSBid.refresh_biding('bid');
            console.log('恭喜！您已竞价成功！');
        } else {
            console.log('您已成功出价，请勿重复出价');
        }
    },
    'lightgray': function () {
        console.log('对不起，竞价活动已结束。');
    }
}