'use strict';

const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
const compact = window.matchMedia('(max-width: 42rem)');

function setMenu(open) {
  navigation.hidden = compact.matches && !open;
  toggle.setAttribute('aria-expanded', String(compact.matches && open));
}

function updateLayout() {
  const focusInNavigation = navigation.contains(document.activeElement);
  const focusOnToggle = document.activeElement === toggle;

  toggle.hidden = !compact.matches;
  setMenu(focusInNavigation);

  if (focusOnToggle && !compact.matches) {
    navigation.querySelector('a').focus();
  }
}

updateLayout();
compact.addEventListener('change', updateLayout);

toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') === 'false');
});

navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!compact.matches || !link) return;

  const target = document.getElementById(link.hash.slice(1));
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
  setMenu(false);
});

document.querySelector('.site-header').addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
