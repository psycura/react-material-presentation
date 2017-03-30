export default [
    // {
    //     id           : 1,
    //     layout       : 'list',
    //     enterEffects : [
    //         { type : 'fadeIn', targets : [ '.list' ] },
    //         { type : 'listSplit', targets : [ '.list', '.list-item' ] } ],
    //     leaveEffects : [],
    //     components   : {
    //         wrapper : {
    //             listItems : [
    //                 {
    //                     avatar    : '#00BCD4',
    //                     textBlock : {
    //                         title    : 'Slide #2',
    //                         subtitle : 'Slide #2 Subtitle',
    //                         content  : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.'
    //                     }
    //                 },
    //                 {
    //                     avatar    : '#9C27B0',
    //                     textBlock : {
    //                         title    : 'Slide #2',
    //                         subtitle : 'Slide #2 Subtitle',
    //                         content  : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.'
    //                     }
    //                 },
    //                 {
    //                     avatar    : '#4CAF50',
    //                     textBlock : {
    //                         title    : 'Slide #2',
    //                         subtitle : 'Slide #2 Subtitle',
    //                         content  : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.'
    //                     }
    //                 },
    //             ]
    //         }
    //     }
    // },
    // {
    //     id           : 2,
    //     layout       : 'card',
    //     enterEffects : [
    //         {
    //             type    : 'transformFromPrevSlide',
    //             targets : [
    //                 { from : '.list-item', to : '.card' },
    //                 { from : '.avatar', to : '.button' }
    //             ]
    //         }
    //     ],
    //     leaveEffects : [
    //         { type : 'slideOut', targets : [ '.button', '.card' ] }
    //     ],
    //     components   : {
    //         wrapper : {
    //             card : {
    //                 cardHeader  : {
    //                     title    : 'Slide #2',
    //                     subtitle : 'Slide #2 Subtitle',
    //                     button   : '#00BCD4',
    //                     media    : 'Picture1.jpg',
    //                     bgColor  : '#E91E63'
    //                 },
    //                 cardContent : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
    //             }
    //         }
    //     }
    // },
    {
        id           : 1,
        layout       : 'list',
        enterEffects : [
            { type : 'fadeIn', targets : [ '.list' ] },
            { type : 'listSplit', targets : [ '.list', '.list-item' ] } ],
        leaveEffects : [
            { type : 'slideOut', targets : [ '.avatar', '.list' ] }
        ],
        components   : {
            wrapper : {
                listItems : [
                    {
                        avatar    : '#00BCD4',
                        textBlock : {
                            title    : 'Slide #2',
                            subtitle : 'Slide #2 Subtitle',
                            content  : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.'
                        }
                    },
                    {
                        avatar    : '#9C27B0',
                        textBlock : {
                            title    : 'Slide #2',
                            subtitle : 'Slide #2 Subtitle',
                            content  : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.'
                        }
                    },
                    {
                        avatar    : '#4CAF50',
                        textBlock : {
                            title    : 'Slide #2',
                            subtitle : 'Slide #2 Subtitle',
                            content  : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.'
                        }
                    },
                ]
            }
        }
    },
    {
        id           : 2,
        layout       : 'card',
        enterEffects : [
            { type : 'slideIn', targets : [ '.card', '.button' ] }
        ],
        leaveEffects : [
            { type : 'slideOut', targets : [ '.button', '.card' ] }
        ],
        components   : {
            wrapper : {
                card : {
                    cardHeader  : {
                        title    : 'Slide #2',
                        subtitle : 'Slide #2 Subtitle',
                        button   : '#00BCD4',
                        media    : 'Picture1.jpg',
                        bgColor  : '#E91E63'
                    },
                    cardContent : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
                }
            }
        }
    },
    {
        id           : 3,
        layout       : 'card',
        enterEffects : [
            { type : 'slideIn', targets : [ '.card', '.button' ] }
        ],
        leaveEffects : [
            { type : 'slideOut', targets : [ '.button', '.card' ] }
        ],
        components   : {
            wrapper : {
                card : {
                    cardHeader  : {
                        title    : 'Slide #3',
                        subtitle : 'Slide #3 Subtitle',
                        button   : '#9C27B0',
                        media    : 'Picture2.jpg',
                        bgColor  : '#3F51B5'
                    },
                    cardContent : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
                }
            }
        }
        
    },
    {
        id           : 4,
        layout       : 'card',
        enterEffects : [
            { type : 'slideIn', targets : [ '.card', '.button' ] }
        ],
        leaveEffects : [
            { type : 'slideOut', targets : [ '.button', '.card' ] }
        ],
        components   : {
            wrapper : {
                card : {
                    cardHeader  : {
                        title    : 'Slide #4',
                        subtitle : 'Slide #4 Subtitle',
                        button   : '#4CAF50',
                        media    : 'Picture4.jpg',
                        bgColor  : '#FFEB3B'
                    },
                    cardContent : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
                }
            }
        }
        
    }
]