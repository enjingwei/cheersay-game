// 禁止F12及调试快捷键、右键菜单（完整版）
document.addEventListener('keydown', function(e) {
    // 禁止F12（兼容新旧标准：key + keyCode）
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        alert('禁止使用F12打开开发者工具！');
    }

    // 禁止Ctrl+Shift+I/J、Ctrl+U（调试/查看源码快捷键）
    if (
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
    ) {
        e.preventDefault();
        e.stopPropagation();
        alert('禁止使用调试/查看源码快捷键！');
    }
});

// 禁止右键菜单（防止通过“检查”打开开发者工具）
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    e.stopPropagation();
    alert('禁止右键菜单！');
});