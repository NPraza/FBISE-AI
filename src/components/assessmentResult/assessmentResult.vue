
    <template>
        <a-row type="flex">
            <a-col :span="24" class="mb-24">
                <template>
                    <a-card
                        class="header-solid h-full"
                        style="box-shadow: none;"
                    >
                        <a-row>
                        <a-col :span="16">
                            <h5 class="font-semibold mb-15">AI Assessment Result</h5>
                            <a-row type="flex">
                                <a-col :span="5">
                                    <p>Roll No: <b>12334</b></p>
                                </a-col>
                                <a-col>
                                    <p>Question No: <b>12334</b></p>
                                </a-col>
                            </a-row>
                            <h4 class="title-color">Define state system and explain its 05 key components?</h4>
                        </a-col>
                        <a-col :span="8">
                            <p class="mb-10 text-center">Student Response</p>
                            <img
                                src="images/1S 1.jpg"
                            />
                            <template>
                            <a-image
                            style="width: 200px; height: 200px;"
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                            </template>
                        </a-col>
                        </a-row>
                        <a-row :gutter="16">
                            <a-col :span="8">
                                <h6>A.I Marks</h6>
                                <a-card style="box-shadow: none;">
                                    <div class="mb-20">
                                        <apexchart type="radialBar" height="110" :options="chartStrength" :series="series"></apexchart>
                                        <p class="text-center">Average: 64% (173 response) </p>
                                    </div> 
                                    <p class="font-bold">Breakdown</p>
                                    <div class="mb-15">
                                        <div class="d-flex align-center justify-between">
                                        <p class="m-0">Content</p>
                                        <p class="font-bold m-0">60%</p>
                                        </div>
                                        <a-progress :percent="60" :show-info="false" />
                                    </div>
                                    <div class="mb-15">
                                        <div class="d-flex align-center justify-between">
                                        <p class="m-0">Understanding and Interpretation</p>
                                        <p class="font-bold m-0">60%</p>
                                        </div>
                                        <a-progress :percent="60" :show-info="false" />
                                    </div>
                                    <div class="mb-15">
                                        <div class="d-flex align-center justify-between">
                                        <p class="m-0">Writing Skills</p>
                                        <p class="font-bold m-0">60%</p>
                                        </div>
                                        <a-progress :percent="60" :show-info="false" />
                                    </div>
                                    <div class="mb-15">
                                        <div class="d-flex align-center justify-between">
                                        <p class="m-0">Evidence and Support</p>
                                        <p class="font-bold m-0">60%</p>
                                        </div>
                                        <a-progress :percent="60" :show-info="false" />
                                    </div>
                                    <div class="mb-15">
                                        <div class="d-flex align-center justify-between">
                                        <p class="m-0">Organisation and Structure</p>
                                        <p class="font-bold m-0">60%</p>
                                        </div>
                                        <a-progress :percent="60" :show-info="false" />
                                    </div>
                                </a-card>
                            </a-col>
                            <a-col :span="16">
                                <h6>A.I Based Evaluation</h6>
                                <a-card style="box-shadow: none;">
                                    <p>
                                        Your response contains some inaccuracies and does not fully capture Newton's second law of motion. Let's break it down:
    "Newtown's second law of motion explains the relationship between mass and acceleration." - This statement is partially correct. Newton's second law does indeed describe the relationship between mass and acceleration, but it does not state that a large acceleration will result in large mass.
    "Newtown's second law of motion explains the relationship between mass and acceleration." - This statement is partially correct. Newton's second law does indeed describe the relationship between mass and acceleration, but it does not state that a large acceleration will result in large mass.
                                    </p>
                                </a-card>
                                <h6 class="mt-15">Rubic Scoring</h6>
                                <a-card style="box-shadow: none;">
                                    <p>
                                        Your response contains some inaccuracies and does not fully capture Newton's second law of motion. Let's break it down:
    "Newtown's second law of motion explains the relationship between mass and acceleration." - This statement is partially correct. Newton's second law does indeed describe the relationship between mass and acceleration, but it does not state that a large acceleration will result in large mass.
    "Newtown's second law of motion explains the relationship between mass and acceleration." - This statement is partially correct. Newton's second law does indeed describe the relationship between mass and acceleration, but it does not state that a large acceleration will result in large mass.
                                    </p>
                                </a-card>
                            </a-col>
                        </a-row>
                        <a-row>
                            <a-col>
                                <h6>OCR Text</h6>
                                <a-card style="box-shadow: none;">
                                    <p>
                                        Your response contains some inaccuracies and does not fully capture Newton's second law of motion. Let's break it down:
    "Newtown's second law of motion explains the relationship between mass and acceleration." - This statement is partially correct. Newton's second law does indeed describe the relationship between mass and acceleration, but it does not state that a large acceleration will result in large mass.
    "Newtown's second law of motion explains the relationship between mass and acceleration." - This statement is partially correct. Newton's second law does indeed describe the relationship between mass and acceleration, but it does not state that a large acceleration will result in large mass.
                                    </p>
                                </a-card>
                            </a-col>
                            <a-col class="mt-20">
                                <h6>Feedback:</h6>
                                <a-card style="box-shadow: none;">
                                    <div class="d-flex align-center justify-center">
                                        <p class="mr-25 mb-0"> Are you satisfied with this Checking:</p>
                                        <div class="action-btn-wrapper">
                                            <button class="action-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M5.75 2.68555H2V12.583H5.75V2.68555Z" />
                                                <path d="M17.341 9.40042C17.5406 9.13486 17.6591 8.80502 17.6591 8.44798C17.6591 7.91902 17.3989 7.44992 17.0001 7.16108C17.1997 6.89552 17.3182 6.56567 17.3182 6.20861C17.3182 5.67964 17.0584 5.2103 16.6596 4.92145C16.859 4.65595 16.9773 4.32617 16.9773 3.96927C16.9773 3.09342 16.2647 2.38086 15.3889 2.38086H10.3883C9.56466 2.38086 8.75603 2.52748 7.98494 2.81664L6.6875 3.3032V11.506C8.20794 13.142 9.59956 14.7036 9.85019 15.1047V16.9485C9.85019 17.32 10.1525 17.6224 10.5241 17.6224C12.0565 17.6224 13.3033 16.3756 13.3033 14.8431V14.0115L12.8008 12.2757H16.4116C17.2874 12.2757 18 11.5632 18 10.6873C18 10.1584 17.7398 9.68927 17.341 9.40042Z" />
                                            </svg>
                                        </button>
                                        <button class="action-btn fill">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M2.48697 9.0293C2.22557 9.0293 2.01367 9.24123 2.01367 9.50259V16.4542C2.01367 16.7156 2.2256 16.9275 2.48697 16.9275H5.33852V9.0293H2.48697Z" />
                                                <path d="M17.9892 11.643C17.9892 11.0422 17.6664 10.5153 17.1851 10.2268C17.3695 9.9605 17.4777 9.63748 17.4777 9.28978C17.4777 8.38003 16.7375 7.63986 15.8278 7.63986H12.3448C12.4516 7.15613 12.5976 6.43025 12.6992 5.67037C12.9638 3.69291 12.783 2.59623 12.1303 2.21909C11.7233 1.984 11.2846 1.93632 10.8949 2.08469C10.5938 2.19937 10.1872 2.48133 9.95546 3.17334L9.04006 5.57016C8.57598 6.71627 7.15481 7.91951 6.27344 8.58483V17.137C7.90694 17.7093 9.61151 17.9994 11.3505 17.9994H15.1456C16.0553 17.9994 16.7955 17.2593 16.7955 16.3495C16.7955 16.0309 16.7047 15.7331 16.5477 15.4807C17.0977 15.2128 17.4776 14.648 17.4776 13.9963C17.4776 13.6485 17.3695 13.3256 17.1851 13.0593C17.6664 12.7707 17.9892 12.2438 17.9892 11.643Z" />
                                            </svg>
                                        </button>
                                        </div>
                                    </div>
                                </a-card>
                            </a-col>
                        </a-row>
                        <a-row type="flex" justify="end" class="mt-20">
                            <a-col>
                                <a-button style="width: 150px;">Close</a-button>
                            </a-col>
                        </a-row>
                    </a-card>
                    
                </template>
            </a-col>
        </a-row>
    </template>

<script>
import VueApexCharts from "vue-apexcharts";

	export default ({
        components: {
            apexchart: VueApexCharts,
        },
		data() {
			return {
                series: [70],
                chartStrength: {
                grid: {
                padding: {
                    top: -15,
                    left:-15,
                    right:-15,
                    bottom: -15
                }
                },
                chart: {
                // height: 140,
                type: "radialBar"
                },
                colors: [""],
                plotOptions: {
                radialBar: {
                    hollow: {
                    size: "70%"
                    },
                    track: {
                    show: true,
                    background: "#E3E8F1",
                    strokeWidth: "100%",
                    margin: 0 // margin is in pixels
                    },
                    dataLabels: {
                    showOn: "always",
                    name: {
                        offsetY: 0,
                        show: false,
                        color: "#333",
                        fontSize: "12px",
                        fontWeight: 400
                    },
                    value: {
                        color: "#24AAE2",
                        fontSize: "20px",
                        fontWeight: 800,
                        show: true,
                        offsetY: 10
                    }
                    }
                }
                },
                fill: {
                type: "solid",
                colors: ["#24AAE2"]
                },
                stroke: {
                lineCap: "round"
                }
            },
			}
		},
	})

</script>

<style lang="scss" scoped>
    .title-color{
        color: #24AAE2;
    }
    .d-flex{
        display: flex;
    }
    .align-center{
        align-items: center;
    }
    .justify-between{
        justify-content: space-between;
    }
    .justify-center{
        justify-content: center;
    }
    .action-btn-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .action-btn{
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: transparent;
        border: 1px solid #EBEBEB;
        cursor: pointer;
        margin-right: 10px;
        svg{
            fill: #9D9D9D;
        }
        &:hover{
            svg{
            fill: #24AAE2;
            }
        }
        &.fill svg{
            fill: #24AAE2;
        }
    }

</style>