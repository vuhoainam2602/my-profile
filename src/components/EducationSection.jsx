import { GraduationCap, School } from "lucide-react";
export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30 flex justify-center items-center">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Học <span className="text-primary">vấn</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Dưới đây là quá trình học tập của tôi qua các cấp bậc giáo dục cũng như các chương trình đào tạo chuyên ngành.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
          {/* Thông tin học vấn */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 mt-8">
              <GraduationCap className="text-primary" />
              Quá trình học tập
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold">Đại học Xây Dựng Hà Nội</h4>
                <p className="text-sm text-muted-foreground">Khoa công nghệ thông tin</p>
                <p className="text-sm text-muted-foreground">Chuyên ngành kỹ thuật phần mềm (2020 - 2024)</p>
                <p className="text-sm mt-1">
                  Tập trung vào phát triển hệ thống backend, kiến trúc phần mềm, cơ sở dữ liệu và bảo mật ứng dụng web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
