import jsPDF from 'jspdf';
import { Report } from '../../interfaces/DocumentInterfaces';
import '../../fonts/Times New Roman Cyr Regular-normal';

export const generateReportPDF = (report: Report) => {
  const doc = new jsPDF();

  // Установить шрифт и размер шрифта

  doc.addFont('Times New Roman Cyr Regular-normal.ttf', 'Times New Roman Cyr Regular', 'normal');

  // Установка шрифта
  doc.setFont('Times New Roman Cyr Regular', 'normal');

  // Центрировать текст вручную, вычисляя ширину страницы и текста
  let pageWidth = doc.internal.pageSize.getWidth();

  // Заголовок и шапка документа
  let title = 'СТУДЕНЧЕСКИЙ СОЮЗ БГУ';
  let titleWidth = doc.getTextWidth(title);
  doc.text(title, (pageWidth - titleWidth) / 2, 20);

  //doc.setFont('times', 'normal');
  doc.setFontSize(10);

  let lines = [
    'Республика Беларусь 220030',
    'г. Минск пр. Независимости 4',
    'Тел.: +375 17 209 54 38',
    'Факс: +375 17 209 50 59',
    'E-mail: stud.union.bsu@gmail.com'
  ];

  lines.forEach((line, index) => {
    let textWidth = doc.getTextWidth(line);
    doc.text(line, (pageWidth - textWidth) / 2, 25 + index * 5);
  });

  // Декан
  doc.setFontSize(12);
  doc.text('Декану ФПМИ', 150, 60);
  doc.text('Орловичу Ю.Л.', 150, 65);

  const margin = 10;
  const maxWidth = pageWidth - margin * 2;

  let width = doc.getTextWidth(`Уважаемый Юрий Леонидович!\n`);
  doc.text(`Уважаемый Юрий Леонидович!\n`, (pageWidth - width) / 2, 70);

  doc.setFontSize(12);
  const text =
    report.firstPrefix +
    ' ' +
    report.event +
    ',' +
    ' ' +
    report.eventOrg +
    ' ' +
    report.secondPrefix +
    ' ' +
    report.action +
    '\n';

  doc.text(text, 20, 80, { maxWidth: maxWidth });

  report.auds.forEach((aud, index) => {
    let daysText = '';
    if (!aud.allWeek) {
      daysText += ' по ';
      aud.days.map((day) => (daysText += ' ' + day + ','));
      daysText = daysText.substring(0, daysText.length - 1);
    }
    let timeText = 'c ' + aud.timeFrom?.format('HH:mm') + ' по ' + aud.timeTo?.format('HH:mm');

    doc.text(`-. Аудиторию ${aud.number} ${daysText} ${timeText} `, 30, 100 + index * 10);
  });

  doc.text(`${report.sender}`, 20, 130);
  doc.text('Е.О.Шевцов', 20, 135);

  doc.text('Согласовано:', 20, 150);
  doc.text('Декан ФПМИ БГУ', 20, 155);
  doc.text('Ю.Л.Орлович', 20, 160);

  doc.save('докладная.pdf');
  const pdfDataUri = doc.output('datauristring');
  const newTab = window.open();
  newTab?.document.write(`<iframe width='100%' height='100%' src='${pdfDataUri}'></iframe>`);
};
