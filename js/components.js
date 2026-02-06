class PortfolioSidebar extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        if (!document.querySelector('#font-awesome-css')) {
            const link = document.createElement('link');
            link.id = 'font-awesome-css';
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css';
            link.integrity = 'sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==';
            link.crossOrigin = 'anonymous';
            link.referrerPolicy = 'no-referrer';
            document.head.appendChild(link);
        }

        this.innerHTML = `
        <button onclick="document.getElementById('sidebar').classList.toggle('hidden'); document.getElementById('sidebar').classList.toggle('flex')" class="lg:hidden fixed bottom-6 right-6 z-[60] size-14 bg-primary text-white rounded-full shadow-glow flex items-center justify-center">
            <span class="material-symbols-outlined">menu</span>
        </button>
        <aside id="sidebar" class="fixed left-0 top-0 h-screen w-72 bg-slate-900 border-r border-primary/20 hidden lg:flex flex-col justify-between p-6 z-50 overflow-y-auto custom-scrollbar">
            <div class="flex flex-col gap-8">
                <div class="flex flex-col items-center text-center gap-3">
                    <div class="relative">
                        <div class="size-32 rounded-full border-2 border-primary p-1">
                            <div class="w-full h-full rounded-full bg-cover bg-center" data-alt="Professional portrait of Pritam Pandit" style="background-image: url('img/my-dp.jpg')">
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-xl font-bold tracking-tight">Pritam Pandit</h1>
                        <p class="text-primary text-sm font-semibold capitalize tracking-wider">Developer/Teacher/Freelancer</p>
                        <div class="flex justify-center gap-4 mt-4">
                            <a href="https://github.com/Pritam1926" class="text-slate-400 hover:text-[#181717] transition-all duration-300 hover:scale-125">
                                <i class="fab fa-github text-2xl"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/pritam-pandit-7b9b3933b" class="text-slate-400 hover:text-[#0077B5] transition-all duration-300 hover:scale-125">
                                <i class="fab fa-linkedin text-2xl"></i>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61584027813476" class="text-slate-400 hover:text-[#1877F2] transition-all duration-300 hover:scale-125">
                                <i class="fab fa-facebook text-2xl"></i>
                            </a>
                            <a href="https://www.instagram.com/your_dada1926" class="text-slate-400 hover:text-[#E4405F] transition-all duration-300 hover:scale-125">
                                <i class="fab fa-instagram text-2xl"></i>
                            </a>
                            <a href="https://youtube.com/@your_dada1926" class="text-slate-400 hover:text-[#FF0000] transition-all duration-300 hover:scale-125">
                                <i class="fab fa-youtube text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <nav class="flex flex-col gap-2">
                    ${this.createNavLink('index.html', 'home', 'Home')}
                    ${this.createNavLink('about.html', 'person', 'About')}
                    ${this.createNavLink('services.html', 'design_services', 'Services')}
                    ${this.createNavLink('projects.html', 'code', 'Projects')}
                    ${this.createNavLink('experience.html', 'work', 'Experience')}
                    ${this.createNavLink('teaching.html', 'school', 'Teaching')}
                    ${this.createNavLink('freelancing.html', 'handshake', 'Freelancing')}
                    ${this.createNavLink('achievements.html', 'emoji_events', 'Achievements')}
                    ${this.createNavLink('contact.html', 'mail', 'Contact')}
                </nav>
            </div>
        </aside>
        `;
    }

    createNavLink(href, icon, text) {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const isActive = currentPath === href;

        const activeClasses = "bg-primary text-white shadow-glow";
        const inactiveClasses = "text-slate-400 hover:text-white hover:bg-white/5";
        const iconClass = isActive ? "fill-icon" : "";

        return `
            <a class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? activeClasses : inactiveClasses}" href="${href}">
                <span class="material-symbols-outlined ${iconClass}">${icon}</span>
                <span class="font-medium">${text}</span>
            </a>
        `;
    }
}

class PortfolioFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="p-8 border-t border-slate-200 dark:border-white/5 flex flex-col justify-center items-center gap-4 text-sm text-slate-500 dark:text-[#a19db9]">
            <p>© 2026 Pritam Pandit. All rights reserved.</p>
        </footer>
        `;
    }
}

customElements.define('portfolio-sidebar', PortfolioSidebar);
customElements.define('portfolio-footer', PortfolioFooter);
