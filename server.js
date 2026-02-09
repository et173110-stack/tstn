
const express = require('express');
const path = require('path');
const app = express();

// Cloud Run 會透過環境變數 PORT 指定連接埠，若無則預設 8080
const port = process.env.PORT || 8080;

// 提供靜態檔案服務
app.use(express.static(path.join(__dirname, '.')));

// 確保所有路徑都能導向 index.html (支援前端路由)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`應用程式已啟動，正在監聽連接埠: ${port}`);
});
