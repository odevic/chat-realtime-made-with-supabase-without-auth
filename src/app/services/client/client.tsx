export default async function ConvertImage64(event: React.ChangeEvent<HTMLInputElement>): Promise<{ src: string | null, width: number | null, height: number | null }> {
    return new Promise((resolve, reject) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        const img = new Image();
  
        reader.onloadend = () => {
          const base64String = reader.result as string;
          img.src = base64String;

          img.onload = () => {
            const width = img.width;
            const height = img.height;
  
            resolve({
              src: base64String,
              width: width,
              height: height
            });
          };
  
          img.onerror = () => {
            reject('Error loading image');
          };
        };
  
        reader.onerror = () => {
          reject('Error reading file');
        };
  
        reader.readAsDataURL(file);
      } else {
        resolve({
          src: null,
          width: null,
          height: null
        });
      }
    });
  }
