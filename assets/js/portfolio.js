(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const closeMenu = () => {
    menu?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('is-open');
  };
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
      closeMenu(); menu.focus();
    }
  });
  const mobile = matchMedia('(max-width: 800px)');
  mobile.addEventListener('change', closeMenu);

  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('.research-video').forEach(video => {
    const button = video.parentElement.querySelector('.video-toggle');
    if (!button) return;
    const title = video.closest('article')?.querySelector('h3')?.textContent;
    const name = video.dataset.previewName || title?.split(':')[0].trim() || 'research';
    let userPaused = false;
    let visible = false;
    button.hidden = false;
    const update = () => {
      const paused = video.paused;
      button.textContent = paused ? 'Play ▶' : 'Pause Ⅱ';
      button.setAttribute('aria-label', `${paused ? 'Play' : 'Pause'} ${name} preview`);
    };
    const play = () => video.play().catch(update);
    button.addEventListener('click', () => {
      if (video.paused) { userPaused = false; play(); }
      else { userPaused = true; video.pause(); }
    });
    video.addEventListener('play', update);
    video.addEventListener('pause', update);
    video.addEventListener('error', () => { button.hidden = true; });
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      if (visible && !userPaused && !motion.matches && !document.hidden) play();
      else video.pause();
    }, { threshold: 0.35 });
    observer.observe(video);
    motion.addEventListener('change', () => { if (motion.matches) video.pause(); });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) video.pause();
      else if (visible && !userPaused && !motion.matches) play();
    });
  });

  const search = document.querySelector('#publication-search');
  if (search) {
    const entries = [...document.querySelectorAll('.publication-entry')];
    const status = document.querySelector('#publication-count');
    const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const filter = () => {
      const words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
      let count = 0;
      entries.forEach(entry => {
        const matches = words.every(word => normalize(entry.textContent).includes(word));
        entry.hidden = !matches;
        if (matches) count++;
      });
      document.querySelectorAll('ol.bibliography > li').forEach(item => {
        item.hidden = ![...item.querySelectorAll('.publication-entry')].some(entry => !entry.hidden);
      });
      document.querySelectorAll('.publications h2.bibliography').forEach(heading => {
        let group = heading.nextElementSibling;
        heading.hidden = group?.matches('ol.bibliography') && ![...group.querySelectorAll('.publication-entry')].some(entry => !entry.hidden);
      });
      if (status) status.textContent = search.value.trim() ? `${count} ${count === 1 ? 'result' : 'results'}` : '';
    };
    search.addEventListener('input', filter);
    filter();
  }
})();
