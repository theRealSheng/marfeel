const LineChart = (color, id) => {

  const canvas = document.getElementById('line-chart-' + id)
  const ctx = canvas.getContext('2d')
  const width = canvas.width = 160

  if (id % 2) {
    ctx.translate(width, 0);
    ctx.scale(-1, 1);
    ctx.beginPath();
  } else {
    ctx.beginPath();
  }

  ctx.moveTo(0, 130);
  ctx.lineTo(20, 123);
  ctx.lineTo(40, 129);
  ctx.lineTo(60, 122);
  ctx.lineTo(80, 114);
  ctx.lineTo(100, 121);
  ctx.lineTo(120, 115);
  ctx.lineTo(140, 118);
  ctx.lineTo(160, 113);
  ctx.arc(80, 80, 90, 0, Math.PI, false);
  ctx.lineWidth = 2;
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.fillStyle = color + "16";
  ctx.fill();
}

export default LineChart;