// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="pyscript/README.html"><strong aria-hidden="true">0.</strong> pyscript</a></li><li class="chapter-item "><a href="python基础_1_python基础/README.html"><strong aria-hidden="true">1.</strong> _python基础</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="python基础_1_python基础/1.python3基础语法.html"><strong aria-hidden="true">1.0.</strong> python3基础语法.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/10.Python3集合.html"><strong aria-hidden="true">1.1.</strong> Python3集合.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/11.Number类型.html"><strong aria-hidden="true">1.2.</strong> Number类型.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/12.python3流程控制.html"><strong aria-hidden="true">1.3.</strong> python3流程控制.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/13.Python3迭代器与生成器.html"><strong aria-hidden="true">1.4.</strong> Python3迭代器与生成器.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/14.函数.html"><strong aria-hidden="true">1.5.</strong> 函数.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/15.Python3JSON数据解析.html"><strong aria-hidden="true">1.6.</strong> Python3JSON数据解析.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/16.Python3面向对象.html"><strong aria-hidden="true">1.7.</strong> Python3面向对象.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/17.模块与包.html"><strong aria-hidden="true">1.8.</strong> 模块与包.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/18.枚举.html"><strong aria-hidden="true">1.9.</strong> 枚举.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/19.装饰器.html"><strong aria-hidden="true">1.10.</strong> 装饰器.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/2.基本数据类型.html"><strong aria-hidden="true">1.11.</strong> 基本数据类型.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/20.JsonDictObject互转.html"><strong aria-hidden="true">1.12.</strong> JsonDictObject互转.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/3.Python3数据类型转换.html"><strong aria-hidden="true">1.13.</strong> Python3数据类型转换.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/4.Python推导式.html"><strong aria-hidden="true">1.14.</strong> Python推导式.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/5.Python3运算符.html"><strong aria-hidden="true">1.15.</strong> Python3运算符.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/6.Python3字符串.html"><strong aria-hidden="true">1.16.</strong> Python3字符串.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/7.python3列表.html"><strong aria-hidden="true">1.17.</strong> python3列表.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/8.元祖.html"><strong aria-hidden="true">1.18.</strong> 元祖.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/9.Python3字典.html"><strong aria-hidden="true">1.19.</strong> Python3字典.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/With关键字.html"><strong aria-hidden="true">1.20.</strong> With关键字.md</a></li><li class="chapter-item "><a href="python基础_1_python基础/杂项.html"><strong aria-hidden="true">1.21.</strong> 杂项.md</a></li></ol></li><li class="chapter-item "><a href="logging.html"><strong aria-hidden="true">2.</strong> logging.md</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">python</li><li class="chapter-item "><a href="python_install_guide.html"><strong aria-hidden="true">3.</strong> install_guide.md</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">python三方库</li><li class="chapter-item "><a href="python三方库_2_fabric.html"><strong aria-hidden="true">4.</strong> _fabric</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="python三方库_2_fabric/fabric/README.html"><strong aria-hidden="true">4.0.</strong> fabric</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="python三方库_2_fabric/fabric/Configuration.html"><strong aria-hidden="true">4.0.0.</strong> Configuration.md</a></li></ol></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">README</li><li><ol class="section"><li><ol class="section"><li class="chapter-item "><a href="python三方库_2_fabric/fabric/README_1.x.html"><strong aria-hidden="true">4.0.3.</strong> x.md</a></li></ol></li><li class="chapter-item "><a href="python三方库_2_fabric/invoke/README.html"><strong aria-hidden="true">4.1.</strong> invoke</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="python三方库_2_fabric/invoke/1.DefiningAndRunningTask.html"><strong aria-hidden="true">4.1.0.</strong> DefiningAndRunningTask.md</a></li><li class="chapter-item "><a href="python三方库_2_fabric/invoke/2.InvokeCoreUsage.html"><strong aria-hidden="true">4.1.1.</strong> InvokeCoreUsage.md</a></li><li class="chapter-item "><a href="python三方库_2_fabric/invoke/3.Configuration.html"><strong aria-hidden="true">4.1.2.</strong> Configuration.md</a></li><li class="chapter-item "><a href="python三方库_2_fabric/invoke/4.loadingCollections.html"><strong aria-hidden="true">4.1.3.</strong> loadingCollections.md</a></li><li class="chapter-item "><a href="python三方库_2_fabric/invoke/5.UsingInvokeAslibrary.html"><strong aria-hidden="true">4.1.4.</strong> UsingInvokeAslibrary.md</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
