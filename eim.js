+(function (factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function (scope) {
    'use strict';

    const url = new URL(window.location.href);
    var adapterHost = url.searchParams.get("adapter_host");
    if (!adapterHost) {
        var adapterHost = "codelab-adapter.codelab.club";
    }

    var proto;
    var Module = scope.Module;

    function EIM(eim_name) {
        Module.call(this);
        this.eim_name = eim_name;
        this.socket = io(`//${adapterHost}:12358` + "/test", {
            transports: ["websocket"]
        });

        this.payload = this.topic = "";
    }

    EIM.prototype = proto = Object.create(Module.prototype, {
        constructor: {
            value: EIM
        }
    });

    proto.listen = function (event) {
        this.socket.on("sensor", msg => {
            this.topic = msg.message.topic;
            this.payload = msg.message.payload;
            event(msg.message);
        });
        return this;
    }

    proto.sendto = function (topic, payload) {
        this.socket.emit("actuator", {
            name: eim_name,
            topic: topic,
            payload: payload,
        });
        return this;
    }

    proto.unit_test = function () {
        socket = io("wss://codelab-adapter.codelab.club:12358/test", {
            transports: ["websocket"]
        });
        console.log(socket.connected);

        socket.on("sensor", msg => {
            console.log(msg.message.payload);
        });

        socket.on("sensor", msg => {
            console.log(msg.message.topic);
        });

        setInterval(function () {
            socket.emit("actuator", {
                topic: "eim/python",
                payload: "isconnected"
            });
        }, 5000);
    }

    scope.module.EIM = EIM;
}));