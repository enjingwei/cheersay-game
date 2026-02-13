// 禁止F12及调试快捷键、右键菜单（完整版）
document.addEventListener('keydown', function(e) {
    // 禁止F12（兼容新旧标准：key + keyCode）
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        myAlert('禁止使用F12打开开发者工具！'); // 替换为自定义弹窗
    }

    // 禁止Ctrl+Shift+I/J、Ctrl+U（调试/查看源码快捷键）
    if (
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
    ) {
        e.preventDefault();
        e.stopPropagation();
        myAlert('禁止使用调试/查看源码快捷键！'); // 替换为自定义弹窗
    }
});

// 禁止右键菜单（防止通过“检查”打开开发者工具）
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    e.stopPropagation();
    myAlert('禁止右键菜单！'); // 替换为自定义弹窗
});

// 自定义弹窗方法（优化版）
function myAlert(msg) {
  // 先移除已存在的弹窗，避免重复
  const oldOverlay = document.querySelector('.custom-overlay');
  const oldAlert = document.querySelector('.custom-alert');
  if (oldOverlay) oldOverlay.remove();
  if (oldAlert) oldAlert.remove();

  // 创建遮罩层
  let overlay = document.createElement('div');
  overlay.className = 'custom-overlay';

  // 创建弹窗容器
  let box = document.createElement('div');
  box.className = 'custom-alert';
  box.innerText = msg;

  // 创建确认按钮
  let btn = document.createElement('button');
  btn.innerText = '确定';
  btn.className = 'alert-confirm-btn'; // 添加类名方便样式控制
  btn.onclick = () => {
    overlay.remove();
    box.remove();
  };

  // 组装弹窗
  box.appendChild(btn);
  document.body.appendChild(overlay);
  document.body.appendChild(box);

  // 点击遮罩层也能关闭弹窗（可选优化）
  overlay.onclick = () => {
    overlay.remove();
    box.remove();
  };
}