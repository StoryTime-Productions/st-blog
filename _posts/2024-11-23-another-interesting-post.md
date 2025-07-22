---
title: "Building Prochaine Station: Horror Game Design in Unity"
date: 2024-11-23
categories:
  - game development
  - unity
  - horror
tags:
  - prochaine station
  - unity engine
  - horror game design
  - psychological thriller
  - montreal metro
---

One of our most ambitious projects at StoryTime Productions is **Prochaine Station**, a psychological horror adventure that transforms the familiar Montreal metro system into something unsettling and mysterious.

## The Concept

<div class="game-dev-highlight">
Prochaine Station takes players through seemingly mundane daily tasks that gradually become increasingly bizarre and unsettling. The game explores psychological horror through environmental storytelling and subtle narrative shifts.
</div>

## Design Philosophy

Our approach to horror game design focuses on:

### 1. **Atmospheric Tension**
Rather than relying on jump scares, we build tension through:
- Gradual environmental changes
- Subtle audio cues and ambient soundscapes  
- Lighting that shifts imperceptibly over time
- Familiar spaces that slowly become unfamiliar

### 2. **Montreal Metro Inspiration**
Living in Montreal, we're intimately familiar with the metro system. This local knowledge allows us to:
- Recreate authentic station layouts and atmospheres
- Subvert player expectations of familiar spaces
- Incorporate unique architectural elements of Montreal's underground

### 3. **Unity Implementation Challenges**

Working in Unity, we've encountered several interesting technical challenges:

```csharp
// Example: Dynamic lighting system for psychological effects
public class PsychologicalLighting : MonoBehaviour 
{
    [SerializeField] private Light[] ambientLights;
    [SerializeField] private AnimationCurve intensityCurve;
    
    private void Update() 
    {
        float timeProgression = GameManager.Instance.GetNormalizedGameTime();
        float targetIntensity = intensityCurve.Evaluate(timeProgression);
        
        foreach (Light light in ambientLights) 
        {
            light.intensity = Mathf.Lerp(light.intensity, targetIntensity, Time.deltaTime);
        }
    }
}
```

## Development Insights

### Audio Design
The soundscape is crucial for psychological horror. We're layering:
- <span class="unity-badge">Metro</span> Authentic metro station ambience
- <span class="unity-badge">Horror</span> Subtle distortions and anomalies
- <span class="unity-badge">Dynamic</span> Reactive audio that responds to player behavior

### Level Design
Each station in our game serves as both a familiar space and a psychological canvas:
- **Berri-UQAM**: The central hub with branching narratives
- **Mont-Royal**: Claustrophobic tunnels and echoing spaces
- **Atwater**: Industrial atmosphere with mechanical undertones

## What's Next

We're targeting a **June 2025** release for Prochaine Station. In upcoming posts, we'll dive deeper into:
- Shader development for atmospheric effects
- Narrative branching systems
- Performance optimization for mobile platforms
- Localization challenges (French/English)

The intersection of local culture, technical innovation, and psychological storytelling makes this project uniquely exciting for our Montreal-based team.

*More development insights coming soon!*  
*– The StoryTime Productions Team* 🚇
