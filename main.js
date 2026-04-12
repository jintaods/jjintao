/* =============================================
   上海京涛营销策划 - 公共脚本
   ============================================= */

// 导航栏滚动效果
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// 汉堡菜单
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
}

// 滚动揭示动画
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

reveals.forEach(el => revealObserver.observe(el));

// 当前页面高亮
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// 表单验证
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('[name="name"]')?.value.trim();
    const phone = contactForm.querySelector('[name="phone"]')?.value.trim();
    const msg = contactForm.querySelector('[name="message"]')?.value.trim();

    if (!name || !phone || !msg) {
      alert('请填写姓名、电话和留言内容');
      return;
    }
    if (!/^1\d{10}$/.test(phone)) {
      alert('请输入正确的手机号码');
      return;
    }
    alert('感谢您的留言，京涛策划将在24小时内与您联系！');
    contactForm.reset();
  });
}
