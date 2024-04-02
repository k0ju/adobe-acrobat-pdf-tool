// Duplicate Cover
var nNumCopies = 1;
var newName = this.path;

var filename = newName.replace(".pdf", "_neu.pdf");
this.saveAs(filename);

var i = 0;
var nNumDups = nNumCopies + 1;

this.insertPages({ nPage: 0, cPath: newName, nStart: 0 });

for (i = 0; i < this.numPages; i += nNumDups) {
    this.setPageLabels(i);
}


// Trimbox Spine
var TrimboxSizeRS = this.getPageBox("Trim", 0);

TrimboxSizeRS[0] -= 0;
TrimboxSizeRS[1] -= 0;
TrimboxSizeRS[2] -= 595.276;
TrimboxSizeRS[3] -= 0;

this.setPageBoxes("Trim", 0, 0, TrimboxSizeRS);

TrimboxSizeRS[0] -= 8.503;
TrimboxSizeRS[1] += 8.503;
TrimboxSizeRS[2] += 8.503;
TrimboxSizeRS[3] -= 8.503;

this.setPageBoxes("Crop", 0, 0, TrimboxSizeRS);


// Trimbox Cover
var TrimboxSizeTL = this.getPageBox("Trim", 1);
var PageSize = 595.276;
var PageWidth = TrimboxSizeTL[2] - TrimboxSizeTL[0];
var RS = PageWidth - PageSize;

TrimboxSizeTL[0] += RS;
TrimboxSizeTL[1] -= 0;
TrimboxSizeTL[2] -= 0;
TrimboxSizeTL[3] -= 0;

this.setPageBoxes("Trim", 1, 1, TrimboxSizeTL);


// Empty inner Spine
var CropboxSizeRSI = this.getPageBox("Crop");
this.newPage(1, CropboxSizeRSI[2], CropboxSizeRSI[1]);

var TrimboxSizeRSI = this.getPageBox("Trim", 0);
this.setPageBoxes("Trim", 1, 1, TrimboxSizeRSI);


// Page arrangement
var il = this.numPages;
var LastPage = il - 1;

this.movePage(LastPage, 3);
this.movePage(LastPage, 3);
this.movePage(0, 5);
this.movePage(0, 5);