import { ImageResponse } from "next/og";

export const alt = "Sprout Bubba baby tracking app";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f7f2e8",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "64px 72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "rgba(220, 245, 229, 0.8)",
            borderRadius: "999px",
            display: "flex",
            filter: "blur(28px)",
            height: 320,
            left: 520,
            position: "absolute",
            top: 70,
            width: 520,
          }}
        />
        <div
          style={{
            background: "rgba(241, 221, 207, 0.75)",
            borderRadius: "999px",
            display: "flex",
            filter: "blur(30px)",
            height: 260,
            left: -70,
            position: "absolute",
            top: 290,
            width: 420,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 26,
            maxWidth: 690,
            position: "relative",
          }}
        >
          <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
            <div
              style={{
                alignItems: "center",
                background: "#77b82d",
                borderRadius: 22,
                boxShadow: "0 12px 28px rgba(15, 61, 39, 0.22)",
                color: "white",
                display: "flex",
                fontSize: 34,
                fontWeight: 800,
                height: 82,
                justifyContent: "center",
                width: 82,
              }}
            >
              SB
            </div>
            <div
              style={{
                color: "#0f3d27",
                display: "flex",
                fontSize: 44,
                fontWeight: 800,
              }}
            >
              Sprout Bubba
            </div>
          </div>

          <div
            style={{
              color: "#0f3d27",
              display: "flex",
              fontSize: 74,
              fontWeight: 900,
              letterSpacing: -2,
              lineHeight: 1.02,
            }}
          >
            Everything your baby needs.
          </div>

          <div
            style={{
              color: "#647267",
              display: "flex",
              fontSize: 30,
              fontWeight: 500,
              lineHeight: 1.35,
              maxWidth: 620,
            }}
          >
            Track feeds, sleep, nappies, growth and more in one calm,
            beautifully organised app.
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            height: 430,
            justifyContent: "center",
            position: "relative",
            width: 330,
          }}
        >
          <div
            style={{
              background: "#0f3d27",
              borderRadius: 46,
              boxShadow: "0 28px 60px rgba(15, 61, 39, 0.24)",
              display: "flex",
              height: 420,
              padding: 6,
              transform: "rotate(5deg)",
              width: 204,
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "#fff7ef",
                borderRadius: 40,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                overflow: "hidden",
                padding: "34px 16px 16px",
                width: "100%",
              }}
            >
              <div
                style={{
                  background: "#0f3d27",
                  borderRadius: 999,
                  display: "flex",
                  height: 22,
                  position: "absolute",
                  top: 18,
                  width: 76,
                }}
              />
              <div
                style={{
                  color: "#4f3c34",
                  display: "flex",
                  fontSize: 25,
                  fontWeight: 800,
                  marginTop: 24,
                }}
              >
                Maya
              </div>
              <div
                style={{
                  background: "#e6f1e6",
                  borderRadius: 28,
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 22,
                  padding: 18,
                  width: "100%",
                }}
              >
                <div
                  style={{
                    color: "#9a9a9a",
                    display: "flex",
                    fontSize: 18,
                    fontWeight: 800,
                  }}
                >
                  Feed timer
                </div>
                <div
                  style={{
                    color: "#4f3c34",
                    display: "flex",
                    fontSize: 50,
                    fontWeight: 900,
                    marginTop: 22,
                  }}
                >
                  18:52
                </div>
                <div
                  style={{
                    color: "#9a9a9a",
                    display: "flex",
                    fontSize: 18,
                    fontWeight: 700,
                  }}
                >
                  remaining
                </div>
                <div
                  style={{
                    background: "#f08a61",
                    borderRadius: 20,
                    color: "white",
                    display: "flex",
                    fontSize: 18,
                    fontWeight: 800,
                    justifyContent: "center",
                    marginTop: 26,
                    padding: "14px 20px",
                    textAlign: "center",
                  }}
                >
                  Stop & log
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
