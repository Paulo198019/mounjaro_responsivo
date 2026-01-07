
// Rolagem suave
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(a => a.addEventListener('click', e => {
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if (el) { e.preventDefault(); el.scrollIntoView({behavior: 'smooth', block: 'start'}); }
}));

<script>
  // Remove o bloco <details> cujo <summary> seja "Posso comprar sem receita?"
  document.addEventListener('DOMContentLoaded', () => {
    const faq = document.querySelector('#faq');
');    if (!faq) return;
      if (s && s.textContent.trim().toLowerCase() === 'posso comprar sem receita?') {
        d.remove();
      }
    });
  });
</script>
    faq.querySelectorAll('details').forEach(d => {
