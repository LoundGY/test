/* styles.css */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Ensure .menu positions relative to .nav */
}

.menu {
  display: flex;
  gap: 2rem;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

@media (max-width: 768px) {
  .menu {
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    background: #fff;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    z-index: 10;
  }

  .menu.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
}
