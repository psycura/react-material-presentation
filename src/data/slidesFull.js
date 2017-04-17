export default [
    {
        id            : 1,
        slideTemplate : 'list',
        enterEffects  : [
            { type : 'fadeIn', target : '.list', duration : .375, delay : 0 },
            { type : 'listSplit', target : '.list', duration : .175, delay : .375 }
        ],
        leaveEffects  : [
            {
                type     : 'morphTo',
                target   : { srcElement : '#listItem_02 ', targetElement : '.card' },
                duration : .5,
                delay    : 0,
                ease     : 'default'
            },
            {
                type     : 'moveToNextSlide',
                target   : { srcElement : '#listItem_01 .avatar', targetElement : '#button' },
                duration : .5,
                delay    : 0,
                ease     : 'default'
            }
        ],
        components    : [
            {
                id        : 'listItem_01',
                avatar    : '#00BCD4',
                textBlock : {
                    title    : 'Slide #2',
                    subtitle : 'Slide #2 Subtitle',
                    content  : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.'
                }
            },
            {
                id        : 'listItem_02',
                avatar    : '#9C27B0',
                textBlock : {
                    title    : 'Slide #2',
                    subtitle : 'Slide #2 Subtitle',
                    content  : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.'
                }
            },
            {
                id        : 'listItem_03',
                avatar    : '#4CAF50',
                textBlock : {
                    title    : 'Slide #2',
                    subtitle : 'Slide #2 Subtitle',
                    content  : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.'
                }
            }
        ]
    },
    {
        id                    : 2,
        slideTemplate         : 'card',
        transformFromPrevious : true,
        enterEffects          : [],
        leaveEffects          : [
            {
                type      : 'slideTo',
                direction : 'bottom',
                target    : '#button',
                duration  : .5,
                delay     : 0,
                ease      : 'default'
            },
            {
                type      : 'slideTo',
                direction : 'bottom',
                target    : '.wrapper',
                duration  : .5,
                delay     : .175,
                ease      : 'default'
            }
        ],
        components            : {
            cardHeader  : {
                title    : 'Slide #2',
                subtitle : 'Slide #2 Subtitle',
                button   : '#00BCD4',
                media    : 'Picture1.jpg',
                bgColor  : '#E91E63'
            },
            cardContent : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
        }
    },
    {
        id            : 3,
        slideTemplate : 'card',
        enterEffects  : [
            {
                type      : 'slideFrom',
                direction : 'top',
                target    : '.wrapper',
                duration  : .5,
                delay     : 0,
                ease      : 'default'
            },
            {
                type      : 'slideFrom',
                direction : 'top',
                target    : '#button',
                duration  : .5,
                delay     : .175,
                ease      : 'elastic'
            },
            {
                type     : 'fadeIn',
                target   : '.card-content',
                duration : .5,
                delay    : 1
            }
        ],
        leaveEffects  : [
            {
                type      : 'slideTo',
                direction : 'left',
                target    : '#button',
                duration  : .5,
                delay     : 0,
                ease      : 'default'
            },
            {
                type      : 'slideTo',
                direction : 'left',
                target    : '.wrapper',
                duration  : .5,
                delay     : .175,
                ease      : 'default'
            },
        ],
        components    : {
            cardHeader  : {
                title    : 'Slide #3',
                subtitle : 'Slide #3 Subtitle',
                button   : '#9C27B0',
                media    : 'Picture2.jpg',
                bgColor  : '#3F51B5'
            },
            cardContent : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
        }
        
    },
    {
        id            : 4,
        slideTemplate : 'card',
        enterEffects  : [
            {
                type      : 'slideFrom',
                direction : 'right',
                target    : '.wrapper',
                duration  : .5,
                delay     : 0,
                ease      : 'default'
            },
            {
                type      : 'slideFrom',
                direction : 'right',
                target    : '#button',
                duration  : .5,
                delay     : .175,
                ease      : 'elastic'
            }
        ],
        leaveEffects  : [
            {
                type      : 'slideTo',
                direction : 'top',
                target    : '#button',
                duration  : .5,
                delay     : 0,
                ease      : 'default'
            },
            {
                type      : 'slideTo',
                direction : 'top',
                target    : '.wrapper',
                duration  : .5,
                delay     : .175,
                ease      : 'default'
            }
        ],
        components    : {
            cardHeader  : {
                title    : 'Slide #4',
                subtitle : 'Slide #4 Subtitle',
                button   : '#4CAF50',
                media    : 'Picture4.jpg',
                bgColor  : '#FFEB3B'
            },
            cardContent : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
        }
        
    },
    {
        id            : 5,
        slideTemplate : 'card',
        enterEffects  : [
            {
                type      : 'slideFrom',
                direction : 'bottom',
                target    : '.wrapper',
                duration  : .5,
                delay     : 0,
                ease      : 'default'
            },
            {
                type      : 'slideFrom',
                direction : 'bottom',
                target    : '#button',
                duration  : .5,
                delay     : .175,
                ease      : 'elastic'
            }
        ],
        leaveEffects  : [
            {
                type      : 'fadeOut',
                direction : 'bottom',
                target    : '.card',
                duration  : 1,
                delay     : 0,
                ease      : 'default'
            }
        ],
        components    : {
            
            cardHeader  : {
                title    : 'Slide #5',
                subtitle : 'Slide #5 Subtitle',
                button   : '#4CAF50',
                media    : 'Picture5.jpg',
                bgColor  : '#FFEB3B'
            },
            cardContent : 'Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
            
        }
        
    },
]