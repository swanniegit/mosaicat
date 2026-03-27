/**
 * Mosaic Accounting & Taxation - Main JavaScript
 */

(function() {
    'use strict';

    /**
     * FAQ Accordion Module
     */
    const FAQ = {
        init() {
            const questions = document.querySelectorAll('.faq-question');
            if (!questions.length) return;

            questions.forEach(question => {
                question.addEventListener('click', () => this.toggle(question));
            });
        },

        toggle(question) {
            const item = question.parentElement;
            const answer = question.nextElementSibling;
            const isActive = item.classList.contains('active');

            // Close all items
            this.closeAll();

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        },

        closeAll() {
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
            });
        }
    };

    /**
     * Smooth Scroll Module
     */
    const SmoothScroll = {
        init() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => this.handleClick(e, anchor));
            });
        },

        handleClick(e, anchor) {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    /**
     * Initialize all modules on DOM ready
     */
    document.addEventListener('DOMContentLoaded', () => {
        FAQ.init();
        SmoothScroll.init();
    });

})();
