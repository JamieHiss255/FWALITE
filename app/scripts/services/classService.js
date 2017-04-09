    angular.module('fwAerial')
        .factory('classService', ['$http', '$q', classService]);

    function classService($http, $q) {
        var self = {};
        var _serviceUri = getServiceUri();

        self.getClassList = getClassList;

        return self;

        function getClassList() {
            //var url = _serviceUri + 'Organization/';
            //var promise = _get(url);
            //return promise;
            return $q.resolve({ data: getTemporaryClasses() })
        }


        function _get(url) { return $http.get(url); };
        function _post(url, data) { return $http.post(url, data); };
        function _put(url, data) { return $http.put(url, data); };
        function _delete(url) { return $http.delete(url); };


        function getServiceUri() {
            //return window.location.protocol + '//' + window.location.host + '/api/v1/';
        }

        function getTemporaryClasses() {
            return [
                { name: "*Intro to Pole (BEG)", description: "Not sure if pole is right for you? Join us in our intro to pole class to give it a shot. In this class students will learn a fun and easy choreographed pole dance routine! *Drop In Welcome **This class will not include spins and tricks on the pole, if you're looking for more than just a sample dance routine, feel free to join our membership classes where you can learn beginner tricks and spins and have longer dance routines by purchasing a membership package and attending Level 1, Multi-Level Choreo and many more classes!!" },
                { name: "Level 1 (BEG)", description: "Level 1 is our first beginner friendly combo class! This class is where you start working through your most basic pole content. With just a handful of tricks and spins and a heavy focus on transitions, most students could expect to work through their L1 curriculum in 3-6+ months before moving on to L2.", teacher: "", startTime: "", duration: "" },
                { name: "Level 2 (BEG)", description: "Level 2 is also a BEGINNER level combo class. Once students have begun to master their transitions in L1 they will move to L2 where they will begin working more spins on the pole and start to get creative with their climbs and sits on the pole. Students will focus on more technical skills preparing them for our intermediate combo class, Level 3!", teacher: "", startTime: "", duration: "" },
                { name: "Level 3 (INT)", description: "This is our intermediate level pole combo class. We will build from the beginner skills students learned in L1 and L2 and will start working more complex tricks, drops and transitions. Students should expect to remain in L3 for at least a year.. Don't worry- we have a TON of content to teach! *Instructor approval required", teacher: "", startTime: "", duration: "" },
                { name: "Level 4/5 (ADV)", description: "Our 4/5 combo class is for advanced pole students only. Level 4 is an introduction to advanced poling where students will focus on the basics of advanced level poling including, deadlift inverts, leg hangs, inverted crucifix holds, brass monkey, shoulder mounts and more. Once those moves are mastered students will build from there with our L5 content! ", teacher: "", startTime: "", duration: "" },
                { name: "*Cardio & Conditioning (BEG)", description: "Our Cardio & Conditioning class is great for some off the pole strrength training! We will incorporate more traditional exercises that will help make you stronger so you can knock out your aerial goals even faster! *Drop Ins Welcome", teacher: "", startTime: "", duration: "" },
                { name: "Inversion Boot Camp (INT/ADV)", description: "This class is an add-on to our cardio & conditioning class for our students holding a membership package. In this class we will focus on the basics of inverting with deadlift training, holding your inverted straddle, inverted crucifix, leg hangs, shoulder mounts and more. *Additional $10 fee to attend *Instructor approval required", teacher: "", startTime: "", duration: "" },
                { name: "Multi-Level Choreography (BEG/INT)", description: "Our Multi-level choreography class is a great class for students looking for a fresh new dance routine each week! We will provide dance instruction to a variety of dance and music styles to keep the class fun and exciting. This is a beginner level class with modifications for more advanced students. Our ML Choreo class is like our intro to pole class- but BETTER with longer routines and spins and tricks that are incorporated in the routine! ", teacher: "", startTime: "", duration: "" },
                { name: "Exotic Floor & Flow (BEG/INT)", description: "Explore fluid movement and the sexier side of pole with this exotic dance class! Heels are STRONGLY encouraged for this class. Students may also want to bring their own knee pads and have multiple layers for this class. (Leggings, leg warmers, and booty shorts.. be prepared for anything!)", teacher: "", startTime: "", duration: "" },
                { name: "*Intro to Aerial (BEG)", description: "Want to explore some of our other aerial apparatuses? In this class you will focus on strength training and fundamental moves and concepts for a variety of apparatuses. (We will focus primarily on the aerial hoop fabric, but students will also be exposed to other apparatuses as well)", teacher: "", startTime: "", duration: "" },
                { name: "Aerial Combo's- Fabric", description: "Once you have learned the proper conditioning, technique and fundamental moves in our intro course you are welcome to join our aerial fabric combo class, where you will focus only on the fabric and continue to build on the basics and start to work on more difficult moves and string moves together for longer combos.", teacher: "", startTime: "", duration: "" },
                { name: "Aerial Combos- Hoop", description: "Once you have learned the proper conditioning, technique and fundamental moves in our intro course you are welcome to join our aerial hoop combo class, where you will focus only on the aerial hoop and continue to build on the basics and start to work on more difficult moves and string moves together for longer combos.", teacher: "", startTime: "", duration: "" },
                { name: "Mixed Aerial (BEG/INT)", description: "Join us as we play on a variety of aerial apparatuses including Aerial Hoop (lyra), Aerial Hammock, Aerial Silks, Pole Tissue! ", teacher: "", startTime: "", duration: "" },
                { name: "*Chair Dance", description: "Join us for a fun and sassy chair dance class! We will learn a fun new choreographed dance routine, exploring a wide range of movement to a variety of music styles! **Drop In Students Welcome", teacher: "", startTime: "", duration: "" },
                { name: "Open Gym", description: "This class is open to all levels for our members. Students purchasing in at an introductory level are not able to attend open gym. During this 1 hour class students can come in and work at their own pace on the content they are learning in their other classes! ", teacher: "", startTime: "", duration: "" }
            ];
        }
    }
