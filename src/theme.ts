import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    keyframes: {
      animloader: {
        "0%": {
          boxShadow:
            "14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px"
        },
        "25%": {
          boxShadow:
            " 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 2px"
        },
        "50%": {
          boxShadow:
            "14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 2px,  -38px 0 0 -2px"
        },
        "75%": {
          boxShadow:
            "14px 0 0 2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px"
        },
        "100%": {
          boxShadow:
            "14px 0 0 -2px,  38px 0 0 2px,  -14px 0 0 -2px,  -38px 0 0 -2px"
        }
      }
    },
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
        animations: {
          animloader: { value: "animloader 2s linear infinite" }
        }
      }
    }
  }
});
