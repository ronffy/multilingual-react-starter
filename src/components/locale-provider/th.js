/**
 * localeProvider组件的locale - th
 * @author ronffy
 */
import compDemoList from '../demoList/localePro/th';

const locale = {
  lowVersionTip: {
    video: 'เบราว์เซอร์ของคุณไม่สนับสนุนแท็กวิดีโอ',
  },
  Table: {
    filterTitle: 'ตัวกรอง',
    filterConfirm: 'ยืนยัน',
    filterReset: 'รีเซ็ต',
    emptyText: 'ไม่มีข้อมูล',
    selectAll: 'เลือกทั้งหมดในหน้านี้',
    selectInvert: 'เลือกสถานะตรงกันข้าม',
  },
  Modal: {
    okText: 'ตกลง',
    cancelText: 'ยกเลิก',
    justOkText: 'ตกลง',
  },
  Popconfirm: {
    okText: 'ตกลง',
    cancelText: 'ยกเลิก',
  },
  Transfer: {
    notFoundContent: 'ไม่พบข้อมูล',
    searchPlaceholder: 'ค้นหา',
  },
  Select: {
    notFoundContent: 'ไม่พบข้อมูล',
  },
  Upload: {
    uploading: 'กำลังอัปโหลด...',
    removeFile: 'ลบไฟล์',
    uploadError: 'เกิดข้อผิดพลาดในการอัปโหลด',
    previewFile: 'ดูตัวอย่างไฟล์',
  },
};

export default {
  code: 'th',
  ...locale,
  compDemoList: {
    lowVersionTip: locale.lowVersionTip,
    ...compDemoList,
  }
}