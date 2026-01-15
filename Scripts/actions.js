
document.addEventListener('DOMContentLoaded', function() {
    
    // Button click handlers
    const actionButtons = document.querySelectorAll('.action-btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const label = this.querySelector('.btn-label').textContent;
            console.log('Button clicked:', label);
            
            // Add visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
            
            // Show toast notification
            showNotification(`تم الضغط على: ${label}`);
        });
    });

    // Checkbox functionality
    const checkboxes = document.querySelectorAll('.form-check-input');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const row = this.closest('tr');
            if (this.checked) {
                row.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            } else {
                row.style.backgroundColor = '';
            }
        });
    });

    // Employee item click handlers
    const employeeItems = document.querySelectorAll('.employee-item');
    
    employeeItems.forEach(item => {
        item.addEventListener('click', function() {
            const name = this.querySelector('.employee-name').textContent;
            console.log('Employee selected:', name);
        });
    });

    // Add hover effect to table rows
    const tableRows = document.querySelectorAll('.dashboard-table tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
        });
        
        row.addEventListener('mouseleave', function() {
            if (!this.querySelector('.form-check-input').checked) {
                this.style.backgroundColor = '';
            }
        });
    });

    // Select all checkboxes functionality
    const headerCheckbox = document.querySelector('.dashboard-table thead .form-check-input');
    if (headerCheckbox) {
        headerCheckbox.addEventListener('change', function() {
            const bodyCheckboxes = document.querySelectorAll('.dashboard-table tbody .form-check-input');
            bodyCheckboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
                checkbox.dispatchEvent(new Event('change'));
            });
        });
    }

    // Notification system
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            font-size: 0.9rem;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    console.log('Dashboard initialized successfully!');
});