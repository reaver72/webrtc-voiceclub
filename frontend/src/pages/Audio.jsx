import React, { useEffect } from "react";
import rogich from "../routes/ktn.mp3";
import {
	SpectrumVisualizer,
	SpectrumVisualizerTheme,
} from "react-audio-visualizers";
const Audio = () => {
	return (
		<div className="h-96">
			<SpectrumVisualizer
				audio={rogich}

				theme={SpectrumVisualizerTheme.roundBars}
				colors={["#b94725", "#f9f9f9", "#f9f453", "#F45342"]}
				iconsColor="#d95c33"
				backgroundColor="transparent"
				highFrequency={10000}
				lowFrequency={200}
				showLoaderIcon={true}
				showMainActionIcon={true}
				numBars={65}
			/>
		</div>
	);
};

export default Audio;
