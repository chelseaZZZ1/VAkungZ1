const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

menuBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
  // aria-hidden สำหรับ accessibility
  const isShown = dropdownMenu.classList.contains('show');
  dropdownMenu.setAttribute('aria-hidden', !isShown);
});

// ถ้าอยากให้คลิกปุ่มสร้างบัญชีทำอะไรเพิ่มเติมก็เพิ่มตรงนี้
const openRegisterBtn = document.getElementById('openRegisterBtn');
openRegisterBtn.addEventListener('click', () => {
  alert('กดสร้างบัญชี (ยังไม่ทำระบบ)');
  // หรือเปิด modal สมัครสมาชิกได้
});
