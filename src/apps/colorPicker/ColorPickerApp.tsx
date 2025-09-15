import { Palette } from "lucide-react";

const ColorPickerApp = () => {
  return (
    <section>
      <div className="bg-white w-[100%] rounded-md">
        <div className="space-y-6">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="bg-gradient-to-r from-teal-500/90 to-teal-600/90 h-48 flex items-center justify-center">
              <div className="text-center text-white">
                <Palette className="h-12 w-12 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">Color Picker</h1>
                <p className="text-white/90">
                  Advanced color picker with palette generator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end w-full">
        <div className="w-[100%] max-w-[600px] my-2 rounded-md bg-slate-200 p-6">
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-slate-700 mb-4">
              Color Picker (Active)
            </h2>
            <p className="text-slate-600">
              Advanced color picker with palette generation, export options, and
              color history.
            </p>
          </div>
        </div>
        <div className="h-[64vh] flex items-center justify-center bg-slate-100 w-[100%]">
          <p className="text-slate-500">
            Color picker interface will be displayed here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ColorPickerApp;
