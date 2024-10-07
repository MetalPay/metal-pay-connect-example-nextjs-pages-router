import { MetalPayConnect } from "metal-pay-connect-js";
import { useEffect, useRef } from "react";

export default function MetalPayConnectComponent({
  signature,
  nonce,
  apiKey,
}: {
  signature: string;
  nonce: string;
  apiKey: string;
}) {
  const metalPayConnectEl = useRef();
  useEffect(() => {
    const metalPayConnect = new MetalPayConnect({
      el: metalPayConnectEl.current,
      environment: "dev",
      params: {
        apiKey,
        signature: signature,
        nonce: nonce,
        address: { "xpr-network": "johndoe" }, // address for the user
        networks: ["xpr-network"], // List of networks to enable
      },
    });

    return () => {
      metalPayConnect.destroy();
    };
    // }
  }, [signature, nonce, apiKey]);
  return (
    <div
      id="metal-pay-connect"
      className="flex w-full items-center justify-center"
    ></div>
  );
}
