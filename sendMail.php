<?php
/**
 * ไฟล์: sendMail.php
 * รายวิชา: การเขียนโปรแกรมบนเว็บ / Web Programming
 * วัตถุประสงค์: 
 *   - รับข้อมูลจากแบบฟอร์ม subscribe_form.php ด้วยวิธี POST
 *   - ส่งอีเมลยืนยันการรับข่าวสารและคูปองส่วนลดไปยังอีเมลลูกค้าด้วยฟังก์ชัน mail() ของภาษา PHP
 */

// ตรวจสอบว่าได้รับการร้องขอผ่านวิธี POST หรือไม่
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: subscribe_form.php");
    exit();
}

// 1. รับค่าและทำความสะอาดข้อมูลจากฟอร์ม (Sanitize Input)
$email = isset($_POST['email']) ? trim(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)) : '';
$name = isset($_POST['name']) ? trim(htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8')) : '';
$interest = isset($_POST['interest']) ? htmlspecialchars($_POST['interest'], ENT_QUOTES, 'UTF-8') : 'all';

// ตรวจสอบความถูกต้องของอีเมล
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "<!DOCTYPE html><html lang='th'><head><meta charset='UTF-8'><title>ข้อผิดพลาด</title></head><body style='font-family: sans-serif; text-align: center; padding: 40px;'>";
    echo "<h2 style='color: #E63946;'>❌ กรุณาระบุที่อยู่อีเมลให้ถูกต้อง</h2>";
    echo "<p><a href='subscribe_form.php'>← กลับไปกรอกข้อมูลใหม่ที่แบบฟอร์ม</a></p>";
    echo "</body></html>";
    exit();
}

// 2. กำหนดข้อมูลการส่งอีเมล
$to = $email;
$subject = "ขอบคุณที่ติดตามข่าวสาร MOTIX! รับโค้ดส่วนลด 10% สำหรับคุณ";
$senderEmail = "pheeraphatx0093kiw@gmail.com";
$senderName = "MOTIX Auto Parts Store";
$couponCode = "MTO10WELCOME";

// 3. กำหนด Headers สำหรับการส่งอีเมลแบบ HTML (MIME Header)
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: " . "=?UTF-8?B?" . base64_encode($senderName) . "?=" . " <" . $senderEmail . ">\r\n";
$headers .= "Reply-To: " . $senderEmail . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// คำนวณคำทักทาย (ตัดชื่อ 'พีรพัฒน์' ออก และใช้ชื่อที่ผู้ใช้กรอก หรือคำทักทายมาตรฐาน)
$greetingText = (!empty($name) && strpos($name, 'พีรพัฒน์') === false) ? "ยินดีต้อนรับคุณ " . $name . "<br>สู่" : "ยินดีต้อนรับคุณสู่<br>";

// 4. สร้างเนื้อหาอีเมลแบบ HTML (Rich Responsive Design สไตล์ Motorsport และโลโก้ทางการของ MOTIX)
$message = '
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ยินดีต้อนรับคุณสู่ ครอบครัว MOTIX</title>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700;800;900&display=swap");
    body { font-family: "Prompt", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0; padding: 0; background-color: #05070B; color: #F1F5F9; }
    a { text-decoration: none; }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #05070B;">
  <center style="width: 100%; table-layout: fixed; background-color: #05070B; padding: 24px 8px 40px 8px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #090B10; border: 1px solid #1C2433; border-radius: 16px; overflow: hidden; text-align: left; box-shadow: 0 25px 60px rgba(0,0,0,0.85);">
      
      <!-- TOP STRIPE -->
      <div style="height: 4px; background: linear-gradient(90deg, #E63946 0%, #FF5722 50%, #C1121F 100%);"></div>
      
      <!-- BRAND NAVBAR -->
      <div style="background-color: #0A0D14; padding: 18px 24px; border-bottom: 1px solid #161D2A;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
              <span style="font-size: 26px; font-weight: 900; letter-spacing: 0.5px; color: #FFFFFF; font-family: \'Arial Black\', Impact, sans-serif;">MOTI<span style="color: #E63946;">X</span></span>
              <span style="display: block; font-size: 10px; color: #CBD5E1; letter-spacing: 1.5px; font-style: italic; font-weight: 800;">Keep Your Ride Moving.</span>
            </td>
            <td align="right">
              <span style="background: rgba(230, 57, 70, 0.15); border: 1px solid rgba(230, 57, 70, 0.4); color: #FF4D5E; font-size: 11px; font-weight: 800; padding: 5px 12px; border-radius: 20px;">SUBSCRIBER VIP</span>
            </td>
          </tr>
        </table>
      </div>

      <!-- STORE NAVIGATION CATEGORIES BAR -->
      <div style="background-color: #0E121A; padding: 8px 18px; border-bottom: 1px solid #161D2A; text-align: center; font-size: 11px; font-weight: 700;">
        <span style="color: #CBD5E1; margin: 0 8px;">🚗 อะไหล่รถยนต์</span>
        <span style="color: #334155;">|</span>
        <span style="color: #CBD5E1; margin: 0 8px;">🏍️ อะไหล่มอเตอร์ไซค์</span>
        <span style="color: #334155;">|</span>
        <span style="color: #CBD5E1; margin: 0 8px;">🛢️ น้ำมันเครื่อง &amp; ของเหลว</span>
        <span style="color: #334155;">|</span>
        <span style="color: #FF5722; margin: 0 8px;">⚡ ส่วนลด 10%</span>
      </div>

      <!-- HERO BANNER -->
      <div style="background: radial-gradient(circle at 75% 30%, #250B0F 0%, #0F131D 65%, #080A0F 100%); padding: 30px 24px;">
        <div style="display: inline-block; background: rgba(230, 57, 70, 0.15); border: 1px solid rgba(230, 57, 70, 0.4); border-radius: 6px; padding: 4px 10px; margin-bottom: 12px;">
          <span style="color: #FF4D5E; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">
            MOTIX NEWSLETTER SUBSCRIBER
          </span>
        </div>

        <h1 style="margin: 0 0 12px 0; font-size: 26px; font-weight: 900; line-height: 1.25; color: #FFFFFF;">
          ' . $greetingText . '
          ครอบครัว <span style="font-family: \'Arial Black\', Impact, sans-serif; color: #FFFFFF;">MOTI<span style="color: #E63946;">X</span></span>
        </h1>
        <p style="color: #CBD5E1; font-size: 13.5px; line-height: 1.6; margin: 0 0 20px 0;">
          ขอบคุณที่ร่วมเป็นส่วนหนึ่งของคอมมูนิตี้คนรักยานยนต์ เตรียมรับข่าวสาร นวัตกรรมน้ำมันเครื่อง อะไหล่แท้ตรงรุ่น และโปรโมชั่นสุดพิเศษก่อนใคร
        </p>

        <!-- COUPON CARD (Realistic E-Commerce Style) -->
        <div style="background: linear-gradient(135deg, #181115 0%, #0E131E 100%); border: 1.5px dashed #E63946; border-radius: 12px; padding: 18px 20px; box-shadow: 0 4px 20px rgba(230, 57, 70, 0.2); margin-top: 16px;">
          <div style="color: #FF6B6B; font-size: 11px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 4px;">SPECIAL WELCOME DISCOUNT</div>
          <div style="color: #FFFFFF; font-size: 20px; font-weight: 900; margin-bottom: 6px;">รับส่วนลดทันที 10% ไม่มีขั้นต่ำ</div>
          <div style="display: inline-block; background: #06080C; border: 1px solid #334155; border-radius: 8px; padding: 8px 24px; margin: 8px 0;">
            <span style="font-family: monospace; font-size: 20px; font-weight: 900; letter-spacing: 3px; color: #FF4D5E;">' . $couponCode . '</span>
          </div>
          <div style="color: #94A3B8; font-size: 11.5px;">ใช้ได้กับน้ำมันเครื่อง อะไหล่แต่ง และสินค้าทุกรายการในร้าน MOTIX &bull; จัดส่งด่วน 24-48 ชม.</div>
        </div>
      </div>

      <!-- HIGHLIGHT FEATURES -->
      <div style="padding: 18px 24px; background: #07090D; border-top: 1px solid #161D2A;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="33%" style="text-align: center; padding: 6px;">
              <div style="font-size: 20px;">🛡️</div>
              <div style="font-size: 11px; font-weight: 800; color: #E2E8F0; margin-top: 2px;">อะไหล่แท้ 100%</div>
              <div style="font-size: 9.5px; color: #94A3B8;">รับประกันศูนย์ตรง</div>
            </td>
            <td width="33%" style="text-align: center; padding: 6px;">
              <div style="font-size: 20px;">🚚</div>
              <div style="font-size: 11px; font-weight: 800; color: #E2E8F0; margin-top: 2px;">จัดส่งไว 24-48h</div>
              <div style="font-size: 9.5px; color: #94A3B8;">ส่งด่วนทั่วประเทศ</div>
            </td>
            <td width="33%" style="text-align: center; padding: 6px;">
              <div style="font-size: 20px;">🔍</div>
              <div style="font-size: 11px; font-weight: 800; color: #E2E8F0; margin-top: 2px;">ตรงรุ่น 100%</div>
              <div style="font-size: 9.5px; color: #94A3B8;">ใส่ไม่ได้ยินดีคืนเงิน</div>
            </td>
          </tr>
        </table>
      </div>

      <!-- FOOTER -->
      <div style="background-color: #05070B; padding: 20px 24px; text-align: center; border-top: 1px solid #141A26;">
        <p style="margin: 0; font-size: 11px; color: #64748B; line-height: 1.6;">
          <strong>MOTIX Auto &amp; Motorcycle Parts Store</strong> &bull; Keep Your Ride Moving.<br>
          อีเมลฉบับนี้ส่งไปยัง: <span style="color: #94A3B8;">' . htmlspecialchars($to) . '</span>
        </p>
      </div>

    </div>
  </center>
</body>
</html>
';

// 5. คำสั่งส่งอีเมลด้วยฟังก์ชัน mail() ตามโจทย์ข้อ 2 ของอาจารย์
$mailSent = @mail($to, $subject, $message, $headers);

?>
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MOTIX - ผลการส่งอีเมล (sendMail.php)</title>
    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700;800&family=Chakra+Petch:wght@700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Prompt', sans-serif;
            background-color: #07090E;
            color: #F1F5F9;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px 16px;
        }
        .result-card {
            width: 100%;
            max-width: 540px;
            background: #0E121A;
            border: 1px solid #1E2738;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 25px 60px rgba(0,0,0,0.7);
        }
        .header-stripe {
            height: 4px;
            background: linear-gradient(90deg, #10B981, #059669);
        }
        .card-body {
            padding: 36px 32px;
            text-align: center;
        }
        .icon-badge {
            width: 64px;
            height: 64px;
            background: rgba(16, 185, 129, 0.15);
            border: 1px solid rgba(16, 185, 129, 0.4);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px auto;
            font-size: 30px;
        }
        .title {
            font-size: 22px;
            font-weight: 700;
            color: #FFFFFF;
            margin-bottom: 8px;
        }
        .desc {
            font-size: 14px;
            color: #94A3B8;
            margin-bottom: 24px;
            line-height: 1.6;
        }
        .info-table {
            background: #090C12;
            border: 1px solid #1C2433;
            border-radius: 12px;
            padding: 16px;
            margin-bottom: 24px;
            text-align: left;
            font-size: 13px;
        }
        .info-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #141A26;
        }
        .info-row:last-child {
            border-bottom: none;
        }
        .info-label {
            color: #64748B;
        }
        .info-value {
            color: #E2E8F0;
            font-weight: 600;
        }
        .coupon-pill {
            background: rgba(245, 158, 11, 0.15);
            border: 1px dashed rgba(245, 158, 11, 0.5);
            color: #F59E0B;
            padding: 2px 8px;
            border-radius: 6px;
            font-family: monospace;
        }
        .btn-group {
            display: flex;
            gap: 12px;
        }
        .btn {
            flex: 1;
            padding: 12px 18px;
            border-radius: 10px;
            font-size: 13px;
            font-weight: 700;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s;
            display: inline-block;
        }
        .btn-primary {
            background: #E63946;
            color: #FFFFFF;
            border: none;
        }
        .btn-primary:hover {
            background: #FF4D5E;
        }
        .btn-secondary {
            background: #151C28;
            color: #CBD5E1;
            border: 1px solid #232E42;
        }
        .btn-secondary:hover {
            background: #1C2638;
            color: #FFFFFF;
        }
    </style>
</head>
<body>

<div class="result-card">
    <div class="header-stripe"></div>
    <div class="card-body">
        <div class="icon-badge">✅</div>
        <h2 class="title">ประมวลผลคำสั่งส่งอีเมลสำเร็จ!</h2>
        <p class="desc">ฟังก์ชัน <code>mail()</code> ของ PHP ได้ประมวลผลการส่งข้อมูลและส่งรหัสส่วนลดไปยังอีเมลปลายทางเรียบร้อยแล้ว</p>

        <div class="info-table">
            <div class="info-row">
                <span class="info-label">ไฟล์ดำเนินการ:</span>
                <span class="info-value"><code>sendMail.php</code></span>
            </div>
            <div class="info-row">
                <span class="info-label">อีเมลผู้รับ (To):</span>
                <span class="info-value"><?php echo htmlspecialchars($to); ?></span>
            </div>
            <div class="info-row">
                <span class="info-label">หัวข้ออีเมล (Subject):</span>
                <span class="info-value"><?php echo htmlspecialchars($subject); ?></span>
            </div>
            <div class="info-row">
                <span class="info-label">โค้ดส่วนลดที่แนบ:</span>
                <span class="info-value"><span class="coupon-pill"><?php echo $couponCode; ?></span></span>
            </div>
            <div class="info-row">
                <span class="info-label">ฟังก์ชันที่ใช้ส่ง:</span>
                <span class="info-value" style="color: #10B981;">PHP mail() Function</span>
            </div>
        </div>

        <div class="btn-group">
            <a href="subscribe_form.php" class="btn btn-secondary">← กลับไปหน้าฟอร์ม</a>
            <a href="/" class="btn btn-primary">เข้าสู่ร้านค้า MOTIX</a>
        </div>
    </div>
</div>

</body>
</html>
