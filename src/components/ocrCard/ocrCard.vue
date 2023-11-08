<template>

<a-row class="border-top">
    <a-divider />
    <a-col :span="8" class="ocr-image">
        <img :src="image_src">
        <p>{{ file_name }}</p>
    </a-col>
    <a-col :span="10" class="text-center"><a-textarea v-model:value="ocr_result" placeholder="Basic usage" :rows="7" /></a-col>
    <a-col :span="6" class="text-center"> 
        <div class="action-btn-wrapper">
        <button :class="`action-btn ${feedback == 5 ? 'fill' : ''}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5.75 2.68555H2V12.583H5.75V2.68555Z" />
                <path d="M17.341 9.40042C17.5406 9.13486 17.6591 8.80502 17.6591 8.44798C17.6591 7.91902 17.3989 7.44992 17.0001 7.16108C17.1997 6.89552 17.3182 6.56567 17.3182 6.20861C17.3182 5.67964 17.0584 5.2103 16.6596 4.92145C16.859 4.65595 16.9773 4.32617 16.9773 3.96927C16.9773 3.09342 16.2647 2.38086 15.3889 2.38086H10.3883C9.56466 2.38086 8.75603 2.52748 7.98494 2.81664L6.6875 3.3032V11.506C8.20794 13.142 9.59956 14.7036 9.85019 15.1047V16.9485C9.85019 17.32 10.1525 17.6224 10.5241 17.6224C12.0565 17.6224 13.3033 16.3756 13.3033 14.8431V14.0115L12.8008 12.2757H16.4116C17.2874 12.2757 18 11.5632 18 10.6873C18 10.1584 17.7398 9.68927 17.341 9.40042Z" />
            </svg>
        </button>
        <button :class="`action-btn ${feedback == 1 ? 'fill' : ''}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.48697 9.0293C2.22557 9.0293 2.01367 9.24123 2.01367 9.50259V16.4542C2.01367 16.7156 2.2256 16.9275 2.48697 16.9275H5.33852V9.0293H2.48697Z" />
                <path d="M17.9892 11.643C17.9892 11.0422 17.6664 10.5153 17.1851 10.2268C17.3695 9.9605 17.4777 9.63748 17.4777 9.28978C17.4777 8.38003 16.7375 7.63986 15.8278 7.63986H12.3448C12.4516 7.15613 12.5976 6.43025 12.6992 5.67037C12.9638 3.69291 12.783 2.59623 12.1303 2.21909C11.7233 1.984 11.2846 1.93632 10.8949 2.08469C10.5938 2.19937 10.1872 2.48133 9.95546 3.17334L9.04006 5.57016C8.57598 6.71627 7.15481 7.91951 6.27344 8.58483V17.137C7.90694 17.7093 9.61151 17.9994 11.3505 17.9994H15.1456C16.0553 17.9994 16.7955 17.2593 16.7955 16.3495C16.7955 16.0309 16.7047 15.7331 16.5477 15.4807C17.0977 15.2128 17.4776 14.648 17.4776 13.9963C17.4776 13.6485 17.3695 13.3256 17.1851 13.0593C17.6664 12.7707 17.9892 12.2438 17.9892 11.643Z" />
            </svg>
        </button>
        </div>
        
    </a-col>
   
</a-row>

</template>

<script>

	export default ({
		data() {
			return {
			}
		},
        props: {
            image_src: String,
            file_name: String,
            ocr_result: String,
            feedback: Boolean,
        },
        beforeMount(){
            console.log(this.image_src)
        }
	})

</script>

<style lang="scss" scoped>

    .ocr-image{
        display: flex;
        align-items: center;
        img{
            width: 100%;
            max-width: 200px;
            border-radius: 8px;
        }
        p{
            margin-left: 10px;
        }
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

	.nav-link svg {
		margin-right: 5px;
		vertical-align: middle;
	}
	.nav-link span {
		vertical-align: middle;
	}
	.ant-menu-submenu-popup {
		width: 100%;
	}

</style>