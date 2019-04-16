Vue.component('inout', {
    template:   `<div id="inout-container" class="inout-container">
                    <div class="inout-header">
                        <div class="inout-item inout-expand-oper">+</div>
                        <div class="inout-item inout-input-name">主输入名</div>
                        <div class="inout-item inout-stream">主流配置</div>
                        <div class="inout-item inout-input-name">备输入名</div>
                        <div class="inout-item inout-stream">备流配置</div>
                    </div>
                    <div class="inout-content">
                        <div v-for="input in curInputs" class="inout-input-container">
                            <div class="inout-item inout-expand-oper" :style="inputNameStyle(input.MainStreams.length,input.SubStreams.length)">+</div>
                            <div class="inout-item inout-input-name" :style="inputNameStyle(input.MainStreams.length,input.SubStreams.length)">{{input.Name}}</div>
                            <div class="inout-item inout-stream">
                                <template v-for="path in input.Paths">
                                    <div class="inout-item inout-stream-name">
                                        <input v-model="path.SwitchIndex"/>
                                    </div>
                                    <div class="inout-item inout-stream-name">
                                        <input v-model="path.SwitchPort"/>
                                    </div>
                                    <template v-for="stream in path.Streams">
                                        
                                    </template>
                                </template>
                            </div>
                            <div class="inout-item inout-input-name" :style="inputNameStyle(input.MainStreams.length,input.SubStreams.length)">{{input.Name}}</div>
                            <div class="inout-item inout-stream">
                                <template v-for="stream in input.SubStreams">
                                    <div class="inout-item inout-stream-name">
                                        <input v-model="stream.Name"/>
                                    </div>
                                    <div class="inout-item inout-stream-stream">
                                        <input v-model="stream.Name"/>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>`,
    props:{

    },
    methods:{
        inputNameStyle(length, length1){
            length = Math.max(length, length1);
            return {
                height: length * 40 + 'px',
                lineHeight: length * 40 + 'px'
            }
        }
    },
    data() {
        return {
            curInputs:[{
                Name:'IN1',
                MainStreams:[{
                    Name:'stream1'
                },{
                    Name:'stream1'
                },{
                    Name:'stream1'
                }],
                SubStreams:[{
                    Name:'stream1'
                },{
                    Name:'stream1'
                },{
                    Name:'stream1'
                },{
                    Name:'stream1'
                }]
            },{
                Name:'IN2',
                MainStreams:[{
                    Name:'stream1'
                },{
                    Name:'stream1'
                },{
                    Name:'stream1'
                }],
                SubStreams:[{
                    Name:'stream1'
                },{
                    Name:'stream1'
                },{
                    Name:'stream1'
                }]
            }]
        }
    }
});