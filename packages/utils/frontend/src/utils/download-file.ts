export const downloadFile = (data: Blob, filename: string, mime?: string, bom?: string) => {
    const blobData = typeof bom !== 'undefined' ? [bom, data] : [data];
    const blob = new Blob(blobData, { type: mime || 'application/pdf' });

    const blobURL = window.URL?.createObjectURL
        ? window.URL.createObjectURL(blob)
        : window.webkitURL.createObjectURL(blob);

    const tempLink = document.createElement('a');
    tempLink.style.display = 'none';
    tempLink.href = blobURL;
    tempLink.download = filename;

    // Safari thinks _blank anchor are pop ups. We only want to set _blank
    // target if the browser does not support the HTML5 download attribute.
    // This allows you to download files in desktop safari if pop up blocking
    // is enabled.
    if (typeof tempLink.download === 'undefined') {
        tempLink.target = '_blank';
    }

    tempLink.click();

    // Fixes "webkit blob resource error 1"
    setTimeout(function () {
        window.URL?.revokeObjectURL ? window.URL.revokeObjectURL(blobURL) : window.webkitURL.revokeObjectURL(blobURL);
    }, 200);
};
