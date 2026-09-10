/**
 * Product Listing Page JavaScript - E-Cycle Adventures
 * Handles left filter sidebar accordions toggle, mobile filter drawer toggle,
 * category pill filter selection, color swatches, and cart interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initial State: Only open the 1st filter group, collapse all rest
    const filterGroups = document.querySelectorAll('.filter-group');
    filterGroups.forEach((group, index) => {
        if (index === 0) {
            group.classList.remove('collapsed');
        } else {
            group.classList.add('collapsed');
        }
    });

    // 2. Left Sidebar Accordion Toggle functionality
    const filterTitleWraps = document.querySelectorAll('.filter-title-wrap');

    filterTitleWraps.forEach(header => {
        header.addEventListener('click', () => {
            const filterGroup = header.closest('.filter-group');
            if (filterGroup) {
                filterGroup.classList.toggle('collapsed');
            }
        });
    });

    // 3. Mobile Filter Sidebar Drawer Toggle
    const mobileToggleBtn = document.getElementById('mobileFilterToggleBtn');
    const sidebarFilters = document.querySelector('.sidebar-filters');

    if (mobileToggleBtn && sidebarFilters) {
        mobileToggleBtn.addEventListener('click', () => {
            sidebarFilters.classList.toggle('mobile-open');
            const isOpen = sidebarFilters.classList.contains('mobile-open');
            mobileToggleBtn.setAttribute('aria-expanded', isOpen);
        });
    }

    // 4. Category Filter Pills Selection
    const catPills = document.querySelectorAll('.cat-pill');
    catPills.forEach(pill => {
        pill.addEventListener('click', () => {
            catPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });

    // 5. Wishlist Heart Toggle
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            btn.classList.toggle('active');
        });
    });

    // 6. Color Swatch Selector
    const colorSwatches = document.querySelectorAll('.swatch-dot');
    colorSwatches.forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            const parent = dot.closest('.color-swatches');
            if (parent) {
                parent.querySelectorAll('.swatch-dot').forEach(s => s.classList.remove('active'));
            }
            dot.classList.add('active');
        });
    });

    // 7. Add to Cart Counter
    const cartBadge = document.querySelector('.cart-badge');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    let cartCount = 0;

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            cartCount++;
            if (cartBadge) {
                cartBadge.textContent = cartCount;
            }
            btn.style.transform = 'scale(1.25)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 200);
        });
    });

});
