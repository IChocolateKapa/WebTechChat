/**
 * Created by Echo on 2015/11/12.
 */
option = {
    timeline: {
        data: [20121012, 20130213]
    },
    options: [{
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            y: 'bottom',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        legend: {
            data:['直接访问','邮件营销','联盟广告',
                '视频广告','搜索引擎','百度','谷歌',
                '必应','其他']
        },
        xAxis : [
            {
                type : 'category',
                splitLine : {show : false},
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value',
                position: 'right'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'邮件营销',
                type:'bar',
                tooltip : {trigger: 'item'},
                stack: '广告',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'bar',
                tooltip : {trigger: 'item'},
                stack: '广告',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'bar',
                tooltip : {trigger: 'item'},
                stack: '广告',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'搜索引擎',
                type:'line',
                data:[862, 1018, 964, 1026, 1679, 1600, 1570]
            },

            {
                name:'搜索引擎细分',
                type:'pie',
                tooltip : {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                center: [160,130],
                radius : [0, 50],
                itemStyle :　{
                    normal : {
                        labelLine : {
                            length : 20
                        }
                    }
                },
                data:[
                    {value:1048, name:'百度'},
                    {value:251, name:'谷歌'},
                    {value:147, name:'必应'},
                    {value:102, name:'其他'}
                ]
            }
        ]
    }]
};
