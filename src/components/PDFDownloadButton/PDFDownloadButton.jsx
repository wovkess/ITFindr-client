import jsPDF from 'jspdf';
import { Download } from 'lucide-react';
import styles from './PDFDownloadButton.module.css';

const PDFDownloadButton = ({ profile }) => {
  const downloadPDF = async () => {
    const doc = new jsPDF();
    let y = 20;

    doc.setFontSize(18);
    doc.text('Detailed Information', 15, y);
    y += 10;

    doc.setFontSize(12);

    try {
      doc.text(`Firstname: ${profile.firstName}`, 15, y);
      y += 10;
      doc.text(`Lastname: ${profile.lastName}`, 15, y);
      y += 10;
      doc.text(`Specialization: ${profile.specialization}`, 15, y);
      y += 10;
      doc.text(`Country: ${profile.country}`, 15, y);
      y += 10;
      profile.country === 'Belarus' ? (doc.text(`Phone: +375${profile.phoneNumber}`, 15, y)) : (doc.text(`Phone: +7${profile.phoneNumber}`, 15, y));
      
      y += 10;
      doc.text('About', 15, y);
      y += 7;
      doc.text(profile.about, 15, y, { maxWidth: 180 });
      y += doc.splitTextToSize(profile.about, { maxWidth: 180 }).length * 7 + 10;
      y += 10;
      doc.text('Work Experience', 15, y);
      y += 7;
      doc.text(profile.experience, 15, y, { maxWidth: 180, fontSize: "bold" });
      y += doc.splitTextToSize(profile.experience, { maxWidth: 180 }).length * 7 + 10;
      y += 7;
      doc.text('Technologies', 15, y)
      y+= 7;
      const techNames = profile.technologies.map((tech) => tech.name).join(', ');
      doc.text(techNames, 15, y, {maxWidth: 180});

      doc.save(`${profile.firstName} ${profile.lastName}.pdf`);
    } catch (error) {
      console.error('Error generating PDF', error);
    }
  };

  return (
    <button className={styles.button} onClick={downloadPDF} type="button">
      <span className={styles.button__text}>Download PDF</span>
      <span className={styles.button__icon}>
        <Download className="size-4 text-white" />
      </span>
    </button>
  );
};

export default PDFDownloadButton;
