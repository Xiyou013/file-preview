<template>
    <div class="homePage">test</div>
    <div ref="file" class="file"></div>
    <!-- <div class="my-component" ref="preview">
        <input type="file" @change="previewDocx" ref="file">
    </div> -->
</template>

<script setup>
// import { renderAsync } from "docx-preview";
import { onMounted, ref } from "vue";
import axios from '/src/axios/http.js';
let docx = require('docx-preview');
window.JSZip = require('jszip')
const file = ref()
// const preview = ref()
// const renderDocx = (data,file) => {
//     console.log('111111',data,file);
//     // renderAsync(this.fileData, this.$refs.file, null, {
//     renderAsync(data, file, null, {
//         className: "docx", //默认和文档样式类的类名/前缀
//         inWrapper: true, //启用围绕文档内容呈现包装器
//         ignoreWidth: false, //禁用页面的渲染宽度
//         ignoreHeight: false, //禁用页面的渲染高度
//         ignoreFonts: false, //禁用字体渲染
//         breakPages: true, //在分页符上启用分页
//         ignoreLastRenderedPageBreak: true, //在lastRenderedPageBreak元素上禁用分页
//         experimental: false, //启用实验功能（制表符停止计算）
//         trimXmlDeclaration: true, //如果为true，则在解析之前将从xml文档中删除xml声明
//         useBase64URL: false, //如果为true，图像、字体等将转换为base 64 URL，否则使用URL.createObjectURL
//         useMathMLPolyfill: false, //包括用于铬、边等的MathML多填充。
//         showChanges: false, //启用文档更改的实验渲染（插入/删除）
//         debug: false, //启用额外的日志记录
//     });
// }

// 本地文件预览
// const previewDocx = (e) => {
//     console.log('e::',e);
//     console.log('file.value.files[0]', file.value.files[0]);
//     console.log('preview.value', preview.value);
//     docx.renderAsync(file.value.files[0], preview.value) // 渲染到页面预览
// }

const goPreview=()=> {
    axios({
        method: "get",
        responseType: 'blob', // 因为是流文件，所以要指定blob类型
        url: "/getDoc", // 自己的服务器，提供的一个word下载文件接口
    }).then((res) => {
        console.log('123', res,res.data); // 后端返回的是流文件
        console.log('file.value', file);
        // renderDocx(data, file.value)
        // docx.renderAsync(data, this.$refs.file); // 渲染到页面
        docx.renderAsync(res.data, file.value); // 渲染到页面
    });
    // let res = axios.get('/api/getDoc')
    // console.log('12132123', res);
    // console.log('file.value', file);
    // if (res) {
    //     console.log(res); // 后端返回的是流文件

    //     docx.renderAsync(res.data, file.value); // 渲染到页面
    // }
    // axios.get('/api/getDoc')
    //     .then(response => {
    //         console.log('1111',response.data.url);
    //         console.log('2222',response.data.explanation);
    //     })
    //     .catch(error => {
    //         console.log('3333',error);
    //     });
}

onMounted(() => {
    goPreview()
    // renderDocx()
        // axios({
        //     method: 'get',
        //     responseType: 'blob', // 设置响应文件格式
        //     url: '/docx',
        //     // url: 'C:/Users/Admin/Desktop/消防题库V1.0.docx'
        // }).then(({ data }) => {
        //     docx.renderAsync(data, this.$refs.file) // 渲染到页面预览
        // })
})
</script>

<style>
.homePage {
    font-size: 30px;
}
.file{
    width: 100%;
    height: 100%;
}
.my-component {
    width: 100%;
    height: 90vh;
    border: 1px solid #000;
}
</style>