import multer from "multer";

export const fileType = {
    image: ["image/png", "image/jpeg", "image/webp"],
    pdf: ["application/pdf"],
};

function fileUpload(customType = []) {
    const storage = multer.diskStorage({});
    
    // Define a fileFilter function to check if the mimetype is allowed
    function fileFilter(req, file, cb) {
        // Check if the customType array includes the file's mimetype
        if (customType.includes(file.mimetype)) {
            // If the mimetype is allowed, pass null as the error and true as the result to the callback
            cb(null, true);
        } else {
            // If the mimetype is not allowed, pass an error message to the callback
            cb(new Error("Invalid file type"));
        }
    }
    
    // Create multer instance with custom fileFilter and storage
    const upload = multer({ fileFilter, storage });
    
    return upload;
}

export default fileUpload;
