import React, { useEffect } from "react";
import styled from "styled-components";

const AdContainer = styled.div`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 160px; /* PC에서 사이드바 광고 크기 */
  height: 600px;
  text-align: center;

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
`;

const AdSense = () => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdSense 오류:", e);
    }
  }, []);

  return (
    <AdContainer>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100%" }}
        data-ad-client="ca-pub-9130190970200883" // ✅ 본인 AdSense 코드 입력
        data-ad-slot="YYYYYYYYYY"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </AdContainer>
  );
};

export default AdSense;
