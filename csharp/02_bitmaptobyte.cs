        private byte[] BitmapToBytes(Bitmap bmp)
        {
            byte[] data = new byte[0];
            using (MemoryStream ms = new MemoryStream())
            {
                bmp.Save(ms, ImageFormat.Png);
                ms.Seek(0, 0);
                data = ms.ToArray();
            }
            return data;
        }
