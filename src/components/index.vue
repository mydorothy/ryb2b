<template>
  <div class="index-box">
    <!--头部搜索-->
    <section class="clear search-box">
      <div class="search-box-cover"></div>
      <div class="search">
        <div class="logo">
          <img src="../images/ruyi_logo_patient.png" alt="">
        </div>
        <div class="input-search">
          <input type="text" value="搜索关键字···">
        </div>
        <div class="btn">
          <a href="">登录</a>
        </div>
      </div>
    </section>
    <!--banner-->
    <section class="clear banner">
      <!--iview ui组件中的走马灯-->
      <!--<Carousel
        v-model="value3"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
        <CarouselItem v-for="item in bannerList" v-bind:key="item.id">
          <div class="demo-carousel"><img v-bind:src="item.img_url" alt=""></div>
        </CarouselItem>
      </Carousel>-->
      <swiper :options="bannerOption" ref="mySwiper">
        <swiper-slide class="" v-for="item in bannerList" v-bind:key="item.goodsID" data-swiper-autoplay="2000">
          <!--:to 参数是对象的话 要加冒号，如果是普通的字符串就不用加了-->
          <!--query写法会拼到url里?a=b&c=d ，params 的键值对在请求头header中可以查看到，不放在url中。-->
          <router-link :to="{ name: 'goods', params: { id: item.goodsID }}"> <!--在url中参数不会显示出来,除非在路由配置里加上 path:'/goods：id'-->
          <!--<router-link :to="{path:'/goods',query:{id:item.goodsID}}" >-->  <!--在url中会参数会显示出来-->

            <div class="img-box">
              <img v-bind:src="item.goodsBenUrl | bannerImgFirst" alt="item.goodsName">
            </div>
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
    <!--快速导航-->
    <nav class=" border-b-1px nav">
      <ul class="clear">
        <li>
          <a href="">
            <img src="../images/ruyi_q1@2x.png" alt="">
            <p>全部药品</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="../images/ruyi_q2@2x.png" alt="">
            <p>我的订单</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="../images/ruyi_q3@2x.png" alt="">
            <p>购物车</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="../images/ruyi_q5@2x.png" alt="">
            <p>地址管理</p>
          </a>
        </li>
      </ul>
    </nav>

    <!--如医云系统-->
    <section class="border-t-1px border-b-1px cloud-system">
      <ul class="clear cloud-system-ul">
        <li class="robot-li">
          <a href="http://wapsaas.c-doctor.com/robotDoctor.html">
            <img src="../images/cloud_system1.png" alt="">
            <!--<p>
                <span class="display-block">机器人医生</span>
                <span>人工智能医生Dr.π</span>
            </p>-->
          </a>
        </li>

        <li class="border-l-1px border-b-1px">
          <a href="https://www.c-doctor.com/community/community_main.jsp?outer=1">
            <span class="span"><img src="../images/cloud_system6.png" alt=""></span>
            <p>
              <span class="display-block">药物捐赠</span>
              <span>免费领药、捐药</span>
            </p>
          </a>
        </li>
        <li class="border-b-1px robot-li robot-text">
          <a href="http://wapsaas.c-doctor.com/robotDoctor.html">
            <p>
              <span class="display-block">机器人医生</span>
              <span>人工智能医生Dr.π</span>
            </p>
          </a>
        </li>
        <li class="border-l-1px border-b-1px">
          <a class="more-doctor" href="https://www.c-doctor.com/home/moreDoctor_web.jsp?outer=1">
            <span class="span"><img src="../images/cloud_system3.png" alt=""></span>
            <p>
              <span class="display-block">找医生</span>
              <span>海量三甲医生</span>
            </p>
          </a>
        </li>
        <li class="border-b-1px">
          <a class="btn_skip" href="http://www.c-doctor.com/moments/circle_main.jsp?outer=1" >
            <span class="span"><img src="../images/cloud_system4.png" alt=""></span>
            <p>
              <span class="display-block">圈子</span>
              <span>患友治病分享</span>
            </p>
          </a>
        </li>
        <li class="border-l-1px border-b-1px">
          <a href="http://www.c-doctor.com/doctor_appointment/appointment_home.html">
            <span class="span"><img src="../images/cloud_system5.png" alt=""></span>
            <p>
              <span class="display-block">医院挂号</span>
              <span>一分钟挂专家号</span>
            </p>
          </a>
        </li>
      </ul>
    </section>
    <!--团购专区-->
    <section class="border-t-1px border-b-1px floor-box">
      <!--<div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="str in listImg" v-bind:key="str.id">
            <img v-bind:src="str.url" alt="">
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
      </div>-->
      <div class="h">
        <h3>团购专区</h3>
        <span class="iconfont icon-jiantou arrow-right"></span>
        <router-link to="/activity-list?id=2">更多商品</router-link>
        <!--<a v-bind:href="#/activity-list?id=2">更多商品</a>-->
      </div>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide class="" v-for="str in listImg" style="text-align:center" v-bind:key="str.id" data-swiper-autoplay="2000">
          <div class="border-r-1px list">
            <a href="#/goods">
              <div class="img-box">
                <img :src="str.url" />
              </div>
            </a>
            <div class="content">
              <p>商品名称</p>
              <div class="price-box">
                <p class="price">￥90.98</p>
                <p class="mk-price">￥100.99</p>
                <div class="add-cart">
                  <img class="btn-add-cart" goods_id="" src="../images/add_cart_icon.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <!--新品上架-->
    <section class="border-t-1px border-b-1px floor-box array-box">
      <div class="h">
        <h3>新品上架</h3>
        <span class="iconfont icon-jiantou arrow-right"></span>
        <a href="#">更多商品</a>
      </div>
      <ul class="clear array">
        <li class="border-r-1px border-t-1px" v-for="str in listImg" v-bind:key="str.id">
          <a href="">
            <div class="img-box">
              <img :src="str.url" />
            </div>
          </a>
          <div class="content">
            <p>商品名称</p>
            <div class="price-box">
              <p class="price">￥90.98</p>
              <p class="mk-price">￥100.99</p>
              <div class="add-cart">
                <img class="btn-add-cart" goods_id="" src="../images/add_cart_icon.png" alt="">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <!--科室列表-->
    <section class="border-t-1px border-b-1px floor-box array-box section-list">
      <div class="list">
        <swiper :options="sectionOption" ref="mySwiper">
          <swiper-slide  v-for="str in listImg" style="text-align:center" v-bind:key="str.id" data-swiper-autoplay="2000">
            <div>
              <a class="active" href="javascript:void(0);">妇科用药</a>
            </div>
          </swiper-slide>
        </swiper>

      </div>

      <ul class="clear array">
        <li class="border-r-1px border-t-1px" v-for="str in listImg" v-bind:key="str.id">
          <a href="">
            <div class="img-box">
              <img :src="str.url" />
            </div>
          </a>
          <div class="content">
            <p>商品名称</p>
            <div class="price-box">
              <p class="price">￥90.98</p>
              <p class="mk-price">￥100.99</p>
              <div class="add-cart">
                <img class="btn-add-cart" goods_id="" src="../images/add_cart_icon.png" alt="">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <!--药师咨询-->
    <section class="phone">
      <div class="phone-row">
        <div class="h">药师咨询</div>
        <div class="content">
          <a href="tel:15737124615" class="iconfont icon-dianhua">15737124615</a>
        </div>
      </div>
    </section>

    <!--版权信息-->
    <copyright></copyright>
  </div>
</template>

<script type="text/ecmascript-6">



  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Copyright from '@component/common/copyright'
  import {https} from '../resource/https.js'
  export default {
    name: 'index',
    components: {
      swiper,
      swiperSlide,
      copyright:Copyright,
      https
    },
    data() {
      return {
        /*value3: 0,
        setting: { //走马灯（轮播）配置
          loop:true, //是否开启循环
          autoplay: true,//自动切换
          autoplaySpeed: 3000,//自动切换速度
          dots: 'inside', //指示器位置 inside轮播内部、outside轮播外部、none不显示
          radiusDot: true,//圆形指示器是否显示
          trigger: 'click', //指示分页器触发方式：click、hover
          arrow: 'never' // 左右箭头 hover悬停时显示 、always 一直显示、never 不显示
        },*/
        // 模拟后台返回数据
        bannerList: [],
        listImg:[
          {
            id:'1',
            url:'http://saas.c-doctor.com/statics/attachment/adv/201710191150244728.png'
          },
          {
            id:'2',
            url:'http://saas.c-doctor.com/statics/attachment/adv/201712271400037137.png'
          },
          {
            id:'3',
            url:'http://saastest.c-doctor.com/statics/attachment//store/63/goods/201709221438246811.jpg!310x310'
          },
          {
            id:'4',
            url:'http://saastest.c-doctor.com/statics/attachment//store/63/goods/201709221438246811.jpg!310x310'
          },
          {
            id:'5',
            url:'http://saastest.c-doctor.com/statics/attachment//store/63/goods/201709121420563841.jpg!310x310'
          },
          {
            id:'6',
            url:'http://saastest.c-doctor.com/statics/attachment//store/63/goods/201709081058577366.jpg!310x310'
          }
        ],
        bannerOption: { //vue-awesome-swiper
          initialSlide :0,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          loop: false,
          speed: 400,
          autoplay: true,
          autoplayDisableOnInteraction: false,
//          slidesPerView: 'auto',//设置slider容器能够同时显示的slides数量(carousel模式)。可设置number/ 'auto'
//          spaceBetween: 0,//slide之间的距离（单位px）。
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true//修改swiper的父元素时，自动初始化swiper
        },
        swiperOption: { //vue-awesome-swiper
          initialSlide :0,
          loop: false,
          speed: 400,
          autoplay: true,
          autoplayDisableOnInteraction: false,
          slidesPerView: 'auto',//设置slider容器能够同时显示的slides数量(carousel模式)。可设置number/ 'auto'
          spaceBetween: 0,//slide之间的距离（单位px）。
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true//修改swiper的父元素时，自动初始化swiper
        },
        sectionOption: {
          initialSlide :0,
          loop: false,
          slidesPerView: 'auto',//设置slider容器能够同时显示的slides数量(carousel模式)。可设置number/ 'auto'
          spaceBetween: 0,//slide之间的距离（单位px）。
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true//修改swiper的父元素时，自动初始化swiper
        }
      }
    },
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    filters: {
      bannerImgFirst(imgArr) { //  取banner 接口的第一个图片
        imgArr = JSON.parse(imgArr);
        return imgArr[0];
      }
    },
  // props: ['listImg'],
    mounted() {// DOM加载完成
      var $body = $('body');
      var setCoverOpacity = function() {
        $body.find('.search-box-cover').css({
          opacity: ((($(window).scrollTop() / 200) > 0.8) ? 0.8 : ($(window).scrollTop() / 200))
        })
      }
      //初始化设置背景透明度
      setCoverOpacity();
      //监听滚动条事件，改变透明度
      $(window).scroll(function() {
        setCoverOpacity();
      });
      console.log('mounted', this);
      //this.swiper.slideTo(2, 1000, false)
      /*var swiper = new Swiper('.swiper-container', {
        /!*pagination: '.swiper-pagination',
         paginationClickable: true,
         loop: true,
         speed: 600,
         autoplay: 4000,
         onTouchEnd: function() {
         swiper.startAutoplay()
         }*!/

        observer:true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        speed:600,//slider自动滑动开始到结束的时间（单位ms）。
        slidesPerView: 'auto',//设置slider容器能够同时显示的slides数量(carousel模式)。可设置number/ 'auto'
        //centeredSlides: false,//设定为true时，活动块会居中，而不是默认状态下的居左。
        spaceBetween: 0,//slide之间的距离（单位px）。
        autoplay: 1000,
        autoplayDisableOnInteraction : false,//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
        loop:true,//循环，加上以后滑到最后一张会继续显示第一张
        pagination: '.swiper-pagination',
        preventLinksPropagation: true,
        //loopedSlides :idElement.length,
        onSlideChangeEnd: function(swiper){
          swiper.update()
        },
        onTouchStart: function(swiper,even){//开始拖动

        },
        onTouchEnd: function(swiper){//拖动
          swiper.startAutoplay();
        },
        onInit: function(swiper){//swiper 初始化后执行
        }
      });*/

    },
    created() {
      //首页banner图
      https.getIndexBanner(this).then((data) => {
        console.log('data的值',data.data);// 用data.data || data.body都可以取到参数值
        this.bannerList = data.data;
      },(res) => {
        console.log('失败',res);
      })
    }

  }
</script>

<style lang="scss">
  @import "../css/index.scss";



</style>
