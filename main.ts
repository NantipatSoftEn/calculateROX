interface RefineRate {
  refineLv: number;
  rateSuccess: number;
  rateUnChange: number;
  rateDownGrade: number;
}
const tableRefineRate: RefineRate[] = [
  { refineLv: 1, rateSuccess: 1, rateUnChange: 0.5 ,rateDownGrade: 0 },
  { refineLv: 2, rateSuccess: 0.5, rateUnChange: 0.66, rateDownGrade: 0 },
  { refineLv: 3, rateSuccess: 0.33, rateUnChange: 0.75, rateDownGrade: 0 },
  { refineLv: 4, rateSuccess:  0.25, rateUnChange: 0.4, rateDownGrade: 0 },

  { refineLv: 5, rateSuccess: 0.25, rateUnChange: 0.4, rateDownGrade:0.25 },
  { refineLv: 6, rateSuccess: 0.20, rateUnChange: 0.4, rateDownGrade: 0.25 },
  { refineLv: 7, rateSuccess: 0.20, rateUnChange: 0.4, rateDownGrade: 0.25 },
  { refineLv: 8, rateSuccess: 0.20, rateUnChange: 0.4, rateDownGrade: 0.25 },

  { refineLv: 9, rateSuccess: 0.20, rateUnChange: 0.35, rateDownGrade: 0.3 },
  { refineLv: 10, rateSuccess: 0.20, rateUnChange: 0.35, rateDownGrade: 0.3 },
  { refineLv: 11, rateSuccess: 0.20, rateUnChange: 0.3, rateDownGrade: 0.3 },
  { refineLv: 12, rateSuccess: 0.20, rateUnChange: 0.3, rateDownGrade: 0.3},
];



function simulateRefine(currentLevel:number): number {
    const refineData   = tableRefineRate.find(data => data.refineLv === currentLevel);
    if (!refineData) {
      return currentLevel;
    }
    const randomNumber = Math.random();
    if (randomNumber <= refineData.rateSuccess) {
      return currentLevel + 1; // ตีบวกสำเร็จ
    } else if (randomNumber <= refineData.rateSuccess + refineData.rateUnChange) {
      return currentLevel; // คงเดิม
    } else {
      return Math.max(0, currentLevel - 1); // ตีบวกแตก
    }
  }
  

  // ตัวอย่างการใช้งาน
let currentRefineLevel = 1; 
for (let i = 0; i <  10; i++) { // จำลองการตีบวก 10 ครั้ง
  currentRefineLevel = simulateRefine(currentRefineLevel);
  console.log(`ผลการตีบวกครั้งที่ ${i + 1}:  +${currentRefineLevel}`);
}
