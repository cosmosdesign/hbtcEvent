let NavContent = `
    <div class="patSysInfoBk">
        <!-- 電腦版倒數計時 -->
        <div class="patSysInfo-userInfo--timer--maxcom">
            <p class="patSysInfo-userInfo--timer--setTimeOut">
                00 : 45 : 12
            </p>
            <p class="patSysInfo-userInfo--timer--lastLoginTime">
                　|　2021-06-26 01 : 45 : 12
            </p>
        </div>
        <div class="patSysInfo-userInfoArea jsUserInfoBt">
            <!-- 使用者名稱--電腦 -->
            <div class="patSysInfo-userInfoBt">
                d
            </div>
            <div class="patSysInfo-userInfo--uesrName--maxcom">
                <h6 class="eleDataTit">user</h6>
                <p class="patSysInfo-userInfo--uesrName--maxcom--text mt-2">dfsasij01234</p>
            </div>
            <img src="images/arrow-down--gray--15.svg" alt="" class="patSysInfo-userInfoBt--arrow jsUserInfoBt-arrow">
        </div>
    </div>
    <div class="patSysInfo-userInfo jsUserInfo">
        <!-- 手機版倒數計時 -->
        <div class="patSysInfo-userInfo--timer--phone">
            <p class="patSysInfo-userInfo--timer--setTimeOut">
                00 : 45 : 12
            </p>
            <p class="patSysInfo-userInfo--timer--lastLoginTime pb-20">
                2021-06-26 01 : 45 : 12
            </p>
        </div>
        <!-- 使用者名稱--手機 -->
        <div class="patSysInfo-userInfo--uesrName--phone mb-15">
            <h6 class="eleDataTit">user</h6>
            <p class="patSysInfo-userInfo--uesrName--phone--text mt-2">dfsasij01234</p>
        </div>
        <a href="users-edit-self.html" class="patSysInfo-userInfo--links">編輯個人資料</a>
        <a href="javascript:void(0);" class="btnlinearGradient-em patSysInfo-userInfo--logOutBt">
            系統登出
            <img class="btn-base--icon" src="images/arrow-right--white--15.svg" alt="系統登出" >
        </a>
    </div>
    <!-- 漢堡選單 -->
    <header class="patSmlHeader"> 
        <a href="javascript:void(0);" class="jsNavSml-bt">
            <img src="images/nav-open--gray.svg" alt="打開功能列表" width="30px" height="30px" class="patSmlHeader-navbt">
        </a>
    </header>
    <!-- nav功能選單 -->
    <nav class="patSmlNav jsNavSmall">
        <div class="patSmlNav-closeBt jsNavSml-bt--close">
            <img src="images/nav-close--gray.svg" alt="close button" width="30" height="30">
        </div>
        <div class="patSmlNav-LogoNameBk">
            <img src="images/logo.svg" alt="LOGO" class="patSmlNav-LogoNameBk--logo">
            <h1 class="patSmlNav-LogoNameBk--name">
                臺灣納米科技股份有限公司 <br />
                自動化配方產生系統
            </h1>
        </div>
        <section class="patNavMenu">
            <ul class="jsfirst-level-area">
                <a href="overview.html" class="patNavMenu-list patNavMenu-list--active " title="管理系統首頁">
                    <div class="patNavMenu-iconArea">
                        <img class="patNavMenu-icon" src="images/nav-home--gray.svg" alt="系統首頁" >
                    </div>
                    系統首頁
                </a>
                <div class="clear"></div>
            </ul>
            <ul class="jsfirst-level-area">
                <a href="materials.html" class="patNavMenu-list" title="原料管理">
                    <div class="patNavMenu-iconArea">
                        <img class="patNavMenu-icon" src="images/nav-materials--gray.svg" alt="原料管理" >
                    </div>
                    原料管理
                </a>
                <div class="clear"></div>
            </ul>
            <ul class="jsfirst-level-area">
                <a href="inventories.html" class="patNavMenu-list" title="庫存管理">
                    <div class="patNavMenu-iconArea">
                        <img class="patNavMenu-icon" src="images/nav-inventory--gray.svg" alt="庫存管理" >
                    </div>
                    庫存管理
                </a>
                <div class="clear"></div>
            </ul>
            <ul class="jsfirst-level-area">
                <a href="formula.html" class="patNavMenu-list" title="產品配方管理">
                    <div class="patNavMenu-iconArea">
                        <img class="patNavMenu-icon" src="images/nav-formula--gray.svg" alt="產品配方管理" >
                    </div>
                    產品配方管理
                </a>
                <div class="clear"></div>
            </ul>
            <ul class="jsfirst-level-area">
                <a href="order.html" class="patNavMenu-list" title="製令單管理">
                    <div class="patNavMenu-iconArea">
                        <img class="patNavMenu-icon" src="images/nav-order--gray.svg" alt="製令單管理" >
                    </div>
                    製令單管理
                </a>
                <div class="clear"></div>
            </ul>
            <ul class="jsfirst-level-area">
                <a href="users.html" class="patNavMenu-list" title="系統帳號管理">
                    <div class="patNavMenu-iconArea">
                        <img class="patNavMenu-icon" src="images/nav-user--gray.svg" alt="系統帳號管理" >
                    </div>
                    系統帳號管理
                </a>
                <div class="clear"></div>
            </ul>
            <ul class="jsfirst-level-area">
                <a href="setting.html" class="patNavMenu-list" title="系統參數管理">
                    <div class="patNavMenu-iconArea">
                        <img class="patNavMenu-icon" src="images/nav-setting--gray.svg" alt="系統參數管理" >
                    </div>
                    系統參數管理
                </a>
                <div class="clear"></div>
            </ul>
        </section>
        <a href="order-edit.html" class="patNavOrderBt">
            <img src="/images/nav-orderBt--img.svg" alt="order img" class="patNavOrderBt-img">
            <h5 class="patNavOrderBt-textCh">新增製令單</h5>
            <h6 class="patNavOrderBt-textEn">
                Add <br />
                Manufacturing order 
            </h6>
        </a>
    </nav>
    <div class="patSmlNavopen_bg jsNavSml-openbg"></div>
`
$(document).ready(function() {
    $(".jsNavMain").html(NavContent);
});