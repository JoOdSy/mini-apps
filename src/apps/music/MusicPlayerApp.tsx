import { Music } from "lucide-react";

const MusicPlayerApp = () => {
  return (
    <section>
      <div className="bg-white w-[100%] rounded-md">
        <div className="space-y-6">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="bg-gradient-to-r from-purple-500/90 to-purple-600/90 h-48 flex items-center justify-center">
              <div className="text-center text-white">
                <Music className="h-12 w-12 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">Music Player</h1>
                <p className="text-white/90">
                  Stream music with playlists and equalizer
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
              Music Player (Beta)
            </h2>
            <p className="text-slate-600">
              This music player is currently in beta. Features include
              playlists, equalizer, and visualizer.
            </p>
          </div>
        </div>
        <div className="h-[64vh] flex items-center justify-center bg-slate-100 w-[100%]">
          <p className="text-slate-500">
            Music player controls will be displayed here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayerApp;
