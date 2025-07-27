import React from "react";
import { KuiTooltip, KuiButton, KuiIconButton } from "../components/kui";

export default function TooltipTest() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          KUI Tooltip Test
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 基本的なツールチップ */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Basic Tooltip</h2>
            <div className="flex justify-center">
              <KuiTooltip title="This is a basic tooltip">
                <KuiButton>Hover me</KuiButton>
              </KuiTooltip>
            </div>
          </div>

          {/* 削除アイコン */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Delete Icon</h2>
            <div className="flex justify-center">
              <KuiTooltip title="Delete">
                <KuiIconButton aria-label="Delete item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  </svg>
                </KuiIconButton>
              </KuiTooltip>
            </div>
          </div>

          {/* 位置のバリエーション */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Positions</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              <KuiTooltip title="Top tooltip" position="top">
                <KuiButton size="small">Top</KuiButton>
              </KuiTooltip>
              <KuiTooltip title="Bottom tooltip" position="bottom">
                <KuiButton size="small">Bottom</KuiButton>
              </KuiTooltip>
              <KuiTooltip title="Left tooltip" position="left">
                <KuiButton size="small">Left</KuiButton>
              </KuiTooltip>
              <KuiTooltip title="Right tooltip" position="right">
                <KuiButton size="small">Right</KuiButton>
              </KuiTooltip>
            </div>
          </div>

          {/* バリアント */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Variants</h2>
            <div className="flex gap-2 justify-center">
              <KuiTooltip title="Light variant" variant="light">
                <KuiButton>Light</KuiButton>
              </KuiTooltip>
              <KuiTooltip title="Dark variant" variant="dark">
                <KuiButton>Dark</KuiButton>
              </KuiTooltip>
            </div>
          </div>

          {/* サイズ */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Sizes</h2>
            <div className="flex gap-2 justify-center">
              <KuiTooltip title="Small tooltip" size="small">
                <KuiButton size="small">Small</KuiButton>
              </KuiTooltip>
              <KuiTooltip title="Medium tooltip" size="medium">
                <KuiButton size="medium">Medium</KuiButton>
              </KuiTooltip>
              <KuiTooltip title="Large tooltip" size="large">
                <KuiButton size="large">Large</KuiButton>
              </KuiTooltip>
            </div>
          </div>

          {/* 長いテキスト */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Long Text</h2>
            <div className="flex justify-center">
              <KuiTooltip
                title="This is a very long tooltip text that demonstrates how the tooltip handles longer content and wraps appropriately within the maximum width constraint."
                maxWidth={300}
              >
                <KuiButton>Long text</KuiButton>
              </KuiTooltip>
            </div>
          </div>

          {/* アイコンボタン */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Icon Buttons</h2>
            <div className="flex gap-2 justify-center">
              <KuiTooltip title="Settings">
                <KuiIconButton aria-label="Settings">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </KuiIconButton>
              </KuiTooltip>

              <KuiTooltip title="Help">
                <KuiIconButton aria-label="Help">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </KuiIconButton>
              </KuiTooltip>

              <KuiTooltip title="Notifications">
                <KuiIconButton aria-label="Notifications">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                </KuiIconButton>
              </KuiTooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
