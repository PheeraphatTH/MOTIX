import { products } from './products';

// 1. Symptom & Needs Categories (ค้นหาและแนะนำตามปัญหา/อาการของรถ)
export const RECOMMENDATION_SYMPTOMS = [
  {
    id: 'brake-noise',
    category: 'brake-system',
    iconName: 'Disc',
    titleTh: 'เบรกมีเสียงดัง / เบรกทื่อ / ระยะเบรกยาว',
    titleEn: 'Noisy Brakes / Long Stopping Distance',
    descriptionTh: 'เสียงเอี๊ยดขณะเหยียบเบรก หรือรู้สึกต้องเหยียบแป้นเบรกลึกกว่าปกติ เบรกไม่อยู่ในระยะที่ต้องการ',
    severity: 'high',
    severityLabel: 'ความปลอดภัยสำคัญสูง',
    recommendedProductIds: ['prod-01', 'prod-06', 'prod-19'],
    reasonTh: 'จานเบรก High Carbon ช่วยลดความร้อนสะสมและอาการสั่นสะท้าน ผสานกับผ้าเบรก Semi-Metallic และชุดอัปเกรด Brembo GT เพิ่มแรงหยุดที่แม่นยำ ไม่กินจานเบรก',
    tags: ['แก้เบรกดัง', 'ระยะเบรกสั้นลง', 'ทนความร้อนสูง', 'ความปลอดภัย'],
    defaultMatchScore: 98,
  },
  {
    id: 'engine-sluggish',
    category: 'engine-oil',
    iconName: 'Gauge',
    titleTh: 'รถอืด / เร่งไม่ขึ้น / ถึงรอบเปลี่ยนของเหลว',
    titleEn: 'Sluggish Engine / Routine Service Due',
    descriptionTh: 'เครื่องยนต์ตอบสนองช้า รอบขึ้นช้า กินน้ำมันผิดปกติ หรือวิ่งเกิน 8,000-10,000 กม. แล้ว',
    severity: 'medium',
    severityLabel: 'ควรเปลี่ยนถ่ายตามระยะ',
    recommendedProductIds: ['prod-02', 'prod-16', 'prod-14', 'prod-07'],
    reasonTh: 'น้ำมันเครื่องสังเคราะห์แท้เกรด Racing Motul / Castrol EDGE ลดแรงเสียดทาน คืนอัตราเร่งที่เฉียบคม พร้อมกรองอากาศ K&N High-Flow ดักฝุ่น 99%',
    tags: ['ฟื้นฟูอัตราเร่ง', 'เครื่องเดินเรียบ', 'ประหยัดน้ำมัน', 'ปกป้องเครื่องยนต์'],
    defaultMatchScore: 97,
  },
  {
    id: 'hard-start',
    category: 'battery',
    iconName: 'Zap',
    titleTh: 'สตาร์ตติดยาก / ไดหมุนช้า / ไฟหน้าวูบ',
    titleEn: 'Hard Starting / Weak Battery / Flickering',
    descriptionTh: 'ตอนเช้าบิดกุญแจสตาร์ตหลายรอบ แบตเตอรี่ใช้งานเกิน 1.5 - 2 ปี หรือหัวเทียนจุดระเบิดไม่สม่ำเสมอ',
    severity: 'high',
    severityLabel: 'ป้องกันปัญหารถดับกลางทาง',
    recommendedProductIds: ['prod-04', 'prod-11', 'prod-18', 'prod-03'],
    reasonTh: 'แบตเตอรี่ค่า CCA สูงช่วยให้จ่ายกระแสไฟสตาร์ทได้แรงทันใจ และหัวเทียน Denso Iridium TT / NGK Laser Iridium ให้ประกายไฟเสถียร หมดกังวลเรื่องสตาร์ตไม่ติด',
    tags: ['สตาร์ตติดง่าย', 'กำลังไฟเต็ม 100%', 'หัวเทียนอิริเดียม', 'ทนทานยาวนาน'],
    defaultMatchScore: 96,
  },
  {
    id: 'rough-ride',
    category: 'suspension',
    iconName: 'Activity',
    titleTh: 'ช่วงล่างกระด้าง / เข้าโค้งแล้วรถโคลงเคลง',
    titleEn: 'Harsh Ride / Body Roll In Corners',
    descriptionTh: 'วิ่งผ่านทางขรุขระแล้วเด้งสะเทือน หรือเข้าโค้งด้วยความเร็วแล้วหน้ารถลอย ท้ายปัด ไม่มั่นใจ',
    severity: 'medium',
    severityLabel: 'เพื่อความนุ่มนวลและการควบคุม',
    recommendedProductIds: ['prod-17', 'prod-09', 'prod-05'],
    reasonTh: 'โช้คอัพแก๊ส Öhlins / Profender พร้อมระบบปรับหนืด ช่วยซับแรงกระแทกจากผิวถนนได้นุ่มนวล พร้อมยึดเกาะถนนให้รถนิ่งสนิทขณะเข้าโค้ง',
    tags: ['เข้าโค้งนิ่งสนิท', 'ซับแรงกระแทก', 'ปรับความหนืดได้', 'นุ่มนวลไม่กระด้าง'],
    defaultMatchScore: 95,
  },
  {
    id: 'worn-tires',
    category: 'tires-wheels',
    iconName: 'CircleDot',
    titleTh: 'ดอกยางหมด / เบรกลื่นไถล / ลุยน้ำแล้วส่าย',
    titleEn: 'Worn Tires / Slippery Wet Braking',
    descriptionTh: 'ร่องยางตื้น ยางมีรอยแตกลายงา หรือรู้สึกสูญเสียการยึดเกาะเมื่อเจอถนนเปียกฝน',
    severity: 'high',
    severityLabel: 'ความปลอดภัยสูงสุด',
    recommendedProductIds: ['prod-10'],
    reasonTh: 'ลายดอกยางรีดน้ำเทคโนโลยี PST ช่วยระบายน้ำได้อย่างรวดเร็ว ลดอาการเหินน้ำ เบรกได้สั้นและมั่นใจทุกสภาพถนน',
    tags: ['รีดน้ำดีเยี่ยม', 'เกาะถนนเปียก', 'เบรกกระชับ', 'ยางเรเดียลคุณภาพ'],
    defaultMatchScore: 94,
  },
  {
    id: 'dim-lights',
    category: 'lighting',
    iconName: 'SunMedium',
    titleTh: 'ขับกลางคืนมองทางไม่ชัด / ไฟเดิมสีเหลืองมัว',
    titleEn: 'Dim Headlights / Poor Night Visibility',
    descriptionTh: 'แสงไฟหน้าไม่ส่องไกล แสงฟุ้ง หรือรู้สึกเหนื่อยล้าสายตาเวลาขับขี่เส้นทางมืด',
    severity: 'low',
    severityLabel: 'ทัศนวิสัยเพื่อความปลอดภัย',
    recommendedProductIds: ['prod-12'],
    reasonTh: 'หลอด LED Osram แสงขาวพรีเมียม 6000K สว่างกว่าเดิม 350% ลำแสงมี Cut-off ชัดเจน ไม่แยงตาเพื่อนร่วมทาง',
    tags: ['สว่างกว่าเดิม 350%', 'แสงขาว 6000K', 'ลำแสงไม่แยงตา', 'รับประกัน 5 ปี'],
    defaultMatchScore: 93,
  },
  {
    id: 'chain-drive',
    category: 'chain-sprocket',
    iconName: 'RotateCw',
    titleTh: 'โซ่หย่อน / มีเสียงดังที่สเตอร์ / ออกตัวกระตุก',
    titleEn: 'Slack Chain / Noisy Sprocket / Hesitation',
    descriptionTh: 'โซ่ขับเคลื่อนมอเตอร์ไซค์มีเสียงดัง ยืดจนสุดระยะปรับ หรือฟันสเตอร์เริ่มแหลมสึกหรอ',
    severity: 'medium',
    severityLabel: 'ประสิทธิภาพระบบขับเคลื่อน',
    recommendedProductIds: ['prod-08', 'prod-20'],
    reasonTh: 'ชุดโซ่ DID โอริง X-Ring และรุ่นพิเศษ VR46 Edition ลดแรงเสียดทานและเก็บสารหล่อลื่นได้ดีเยี่ยม สเตอร์เหล็กกล้าชุบแข็ง ส่งกำลังนิ่งเงียบ',
    tags: ['โอริง X-Ring', 'ทนแรงดึงสูง', 'เสียงเงียบ', 'ส่งกำลังแม่นยำ'],
    defaultMatchScore: 92,
  },
  {
    id: 'exhaust-tune',
    category: 'exhaust-system',
    iconName: 'Flame',
    titleTh: 'ท่อเดิมอั้น / เสียงไม่เร้าใจ / อยากรีดแรงม้า',
    titleEn: 'Restricted Exhaust / Power Upgrade Tune',
    descriptionTh: 'ต้องการเพิ่มอัตราเร่งช่วงกลางถึงปลาย ลดน้ำหนักตัวรถ และได้ซุ่มเสียงทุ้มแน่นดุดันสไตล์สปอร์ต',
    severity: 'low',
    severityLabel: 'เพื่อสมรรถนะและความเร้าใจ',
    recommendedProductIds: ['prod-13', 'prod-14'],
    reasonTh: 'ท่อไอเสีย Akrapovic ไทเทเนียมแท้ ปลายคาร์บอน น้ำหนักเบา ระบายไอเสียได้คล่องตัว เพิ่มแรงม้าและแรงบิดอย่างชัดเจน',
    tags: ['ไทเทเนียมแท้', 'ปลายคาร์บอน', 'เพิ่มแรงม้า', 'น้ำหนักเบา'],
    defaultMatchScore: 96,
  },
  {
    id: 'wheels-upgrade',
    category: 'car-wheels',
    iconName: 'CircleDot',
    titleTh: 'ล้อเดิมหนัก / อยากลดน้ำหนักใต้สปริง / แต่งลุคสปอร์ต',
    titleEn: 'Heavy OEM Wheels / Unsprung Weight Reduction',
    descriptionTh: 'ต้องการลดภาระช่วงล่าง พวงมาลัยคมขึ้น ออกตัวคล่องตัว พร้อมลุคสวยระดับมอเตอร์สปอร์ตญี่ปุ่น',
    severity: 'low',
    severityLabel: 'สมรรถนะการควบคุมและความสวยงาม',
    recommendedProductIds: ['prod-15', 'prod-19'],
    reasonTh: 'ล้อแม็ก Enkei RPF1 ผลิตด้วยเทคโนโลยี MAT เบาเพียง 6.8 กก. ลดน้ำหนักใต้สปริง เพิ่มความคล่องตัวและระยะเบรกที่สั้นลง',
    tags: ['MAT Technology', 'เบาพิเศษ 6.8kg', 'Japan Racing', 'คุมง่ายคล่องตัว'],
    defaultMatchScore: 95,
  },
];

// 2. Driving Style Persona
export const DRIVING_STYLES = [
  {
    id: 'daily',
    nameTh: 'เน้นใช้งานประจำวัน / ประหยัด & คุ้มค่า',
    nameEn: 'Daily Commute & Efficiency',
    descriptionTh: 'ขับไปทำงาน ขับในเมือง รถติด ต้องการอะไหล่ทนทาน เปลี่ยนถ่ายง่าย คุ้มค่าคุ้มราคา',
    productIds: ['prod-16', 'prod-07', 'prod-04', 'prod-18', 'prod-10', 'prod-03'],
    badge: 'เน้นคุ้มค่า ทนทาน',
  },
  {
    id: 'sport',
    nameTh: 'สายซิ่ง / สปอร์ตสมรรถนะสูง (Performance)',
    nameEn: 'Sport & High Performance',
    descriptionTh: 'ชอบอัตราเร่งติดเท้า เข้าโค้งมั่นใจ ขับสนุก ต้องการอะไหล่เกรดสนามแข่ง High Spec',
    productIds: ['prod-19', 'prod-13', 'prod-15', 'prod-17', 'prod-02', 'prod-01', 'prod-14', 'prod-20'],
    badge: 'เกรดสมรรถนะสูง',
  },
  {
    id: 'heavy',
    nameTh: 'สายเดินทางไกล / ลุยงานหนัก & ทัวร์ริ่ง',
    nameEn: 'Long Distance & Heavy Duty',
    descriptionTh: 'ขับข้ามจังหวัด รถบรรทุกของ รถมอเตอร์ไซค์ทัวร์ริ่ง ต้องทนความร้อนสูงและความทนทานพิเศษ',
    productIds: ['prod-09', 'prod-12', 'prod-17', 'prod-08', 'prod-02', 'prod-14'],
    badge: 'อึด ทน งานหนัก',
  },
];

// 3. Helper to get recommended products with enriched recommendation rationale
export const getRecommendedProductsForSymptom = (symptomId, vehicleType = 'all', userVehicleModel = '') => {
  const symptom = RECOMMENDATION_SYMPTOMS.find((s) => s.id === symptomId) || RECOMMENDATION_SYMPTOMS[0];
  
  const recommendedItems = products
    .filter((p) => {
      // Must be in the symptom recommended IDs or in category
      const isTarget = symptom.recommendedProductIds.includes(p.id) || p.category === symptom.category;
      if (!isTarget) return false;

      // Check vehicle type filter if specified
      if (vehicleType !== 'all' && p.vehicleType !== vehicleType) {
        return false;
      }

      return true;
    })
    .map((p) => {
      // Calculate personal match percentage
      let score = symptom.defaultMatchScore;
      let matchReasons = [symptom.reasonTh];

      // If user has a vehicle and it matches, boost score and add tag
      let isVehicleDirectMatch = false;
      if (userVehicleModel) {
        const matchesCar = p.compatibleVehicles?.some((v) =>
          userVehicleModel.toLowerCase().includes(v.toLowerCase()) || v.toLowerCase().includes(userVehicleModel.toLowerCase())
        );
        if (matchesCar) {
          score = Math.min(100, score + 2);
          isVehicleDirectMatch = true;
          matchReasons.unshift(`ผ่านการตรวจสอบ: ตรงรุ่นกับ ${userVehicleModel} ของคุณ 100%`);
        }
      }

      return {
        ...p,
        recommendationScore: score,
        recommendationReason: matchReasons[0],
        secondaryReason: matchReasons[1] || '',
        symptomTitle: symptom.titleTh,
        symptomSeverity: symptom.severity,
        symptomSeverityLabel: symptom.severityLabel,
        recommendationTags: symptom.tags,
        isVehicleDirectMatch,
      };
    })
    .sort((a, b) => b.recommendationScore - a.recommendationScore);

  return {
    symptom,
    products: recommendedItems,
  };
};

// 4. Personalized Recommendations for Logged In Members
export const getMemberPersonalizedRecommendations = (user) => {
  if (!user || !user.vehicleModel) {
    // Fallback default featured recommendations
    return products.slice(0, 4).map((p) => ({
      ...p,
      recommendationScore: 95,
      recommendationReason: 'สินค้าแนะนำยอดนิยมประจำสัปดาห์ คุณภาพอะไหล่แท้ระดับพรีเมียม',
      recommendationTags: ['ยอดนิยม', 'รับประกันแท้', 'ส่งไว'],
    }));
  }

  const vehicleModel = user.vehicleModel.toLowerCase();
  
  // Find products compatible with member's vehicle
  const compatibleProducts = products.filter((p) => {
    return p.compatibleVehicles?.some((v) => {
      const vLower = v.toLowerCase();
      return vehicleModel.includes(vLower) || vLower.includes(vehicleModel);
    });
  });

  const finalProducts = compatibleProducts.length > 0 ? compatibleProducts : products.slice(0, 4);

  return finalProducts.map((p, idx) => ({
    ...p,
    recommendationScore: 99 - idx * 2,
    recommendationReason: `คัดสรรพิเศษสำหรับ ${user.vehicleModel} ของคุณโดยเฉพาะ ตรงรุ่น 100%`,
    recommendationTags: ['ตรงรุ่นของคุณ', 'แนะนำสำหรับสมาชิก', 'รับประกันแท้'],
    isMemberExclusive: true,
  }));
};
