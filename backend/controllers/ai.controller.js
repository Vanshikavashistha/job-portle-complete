import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const enhanceDescription = async (req, res) => {
  try {
    const { description } = req.body;
    if (!description) {
      return res.status(400).json({ success: false, message: "Description required" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a professional HR copywriter. Rewrite job descriptions to be clear, professional, and ATS-friendly. Keep it concise (150-200 words), use bullet points for responsibilities and requirements. Only return the rewritten description, nothing else.",
        },
        { role: "user", content: description },
      ],
    });

    const enhancedText = completion.choices[0].message.content;

    return res.status(200).json({ success: true, enhancedDescription: enhancedText });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "AI enhancement failed" });
  }
};

export const analyzeCoverLetter = async (req, res) => {
  try {
    const { coverLetter } = req.body;
    if (!coverLetter || !coverLetter.trim()) {
      return res.status(400).json({ success: false, message: "Cover letter is required" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an HR assistant. Analyze the candidate's cover letter/application message and respond ONLY with valid JSON in this exact format, no extra text: {\"tone\": \"one or two words describing tone e.g. confident, formal, enthusiastic\", \"confidence\": \"low, medium, or high\", \"keySkillsMentioned\": [\"skill1\", \"skill2\"], \"summary\": \"one sentence summary of the candidate's pitch\"}",
        },
        { role: "user", content: coverLetter },
      ],
    });

    const raw = completion.choices[0].message.content;
    const cleaned = raw.replace(/```json|```/g, "").trim();
    const analysis = JSON.parse(cleaned);

    return res.status(200).json({ success: true, analysis });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "AI analysis failed" });
  }
};
