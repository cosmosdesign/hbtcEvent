let NavContent = `
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
            <img src="images/logo.png" alt="LOGO" class="patSmlNav-LogoNameBk--logo">
            <h1 class="patSmlNav-LogoNameBk--name">
                臺中市政府 <br />
                衛生局線上報名系統
            </h1>
        </div>
        <section class="patNavMenu">
            <ul class="jsfirst-level-area">
                <a href="index.html" class="patNavMenu-list patNavMenu-list--active " title="系統總覽頁">
                    <div class="patNavMenu-iconArea">
                        <img class="patNavMenu-icon" src="images/nav-home--gray.svg" alt="系統總覽頁" >
                    </div>
                    系統總覽頁
                </a>
                <div class="clear"></div>
            </ul>
            <ul class="jsfirst-level-area">
                <a href="eventli.html" class="patNavMenu-list " title="報名活動一覽">
                    <div class="patNavMenu-iconArea">
                        <img class="patNavMenu-icon" src="images/nav-event--gray.svg" alt="報名活動一覽" >
                    </div>
                    報名活動一覽
                </a>
                <div class="clear"></div>
            </ul>
            <ul class="jsfirst-level-area">
                <a href="newsli.html" class="patNavMenu-list" title="活動消息一覽">
                    <div class="patNavMenu-iconArea">
                        <img class="patNavMenu-icon" src="images/nav-news--gray.svg" alt="活動消息一覽" >
                    </div>
                    活動消息一覽
                </a>
                <div class="clear"></div>
            </ul>
        </section>
        <p class="patNavCopyright">
            本網站為臺中市政府版權所有，請尊重智慧財產權，未經允許請勿任意轉載、複製或做商業用途。<br /><br />
            請使用IE(第9版以上)或Chrome、FireFox、Edge等瀏覽器瀏覽 <br /><br />
            420206 臺中市豐原區中興路136號 
        </p>
        
    </nav>
    <div class="patSmlNavopen_bg jsNavSml-openbg"></div>
`
$(document).ready(function() {
    $(".jsNavMain").html(NavContent);
});