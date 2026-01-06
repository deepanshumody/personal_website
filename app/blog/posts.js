// posts.js

const posts = [
  {
    slug: "neurips-2025-best-paper-scaling-crl",
    title: "NeurIPS 2025 Best Paper: Scaling depth in self-supervised RL",
    date: "2025-03-26",
    readingTime: "10 min read",
    excerpt:
      "A deeper recap of the work showing why 1000-layer networks can work in contrastive, self-supervised RL—and why it’s not as simple as “make PPO deeper.”",
    tags: ["RL", "Scaling", "NeurIPS"],
    sections: [
      {
        type: "p",
        text:
          "NeurIPS 2025 Best Paper goes to “1000 Layer Networks for Self-Supervised RL: Scaling Depth Can Enable New Goal-Reaching Capabilities.” The headline result is attention-grabbing—1000+ layers in RL—but the deeper takeaway is more subtle: scaling only works when the algorithm looks more like self-supervised learning than classic reward-maximization RL."
      },

      // Links
      {
        type: "p",
        text: "Project page",
        href: "https://wang-kevin3290.github.io/scaling-crl/"
      },

      {
        type: "h2",
        text: "Behind the paper: where the idea came from"
      },
      {
        type: "p",
        text:
          "In the interview, Kevin (a Princeton undergrad at the time) describes how the project started as part of a Princeton independent-work research seminar. The motivation was simple: in language and vision, we scale models aggressively, but in deep RL, “deep” often still means a 2–4 layer MLP."
      },
      {
        type: "p",
        text:
          "Their advisor was initially skeptical—deep RL has a long history of “sounds reasonable, doesn’t work in practice.” What made it a worthwhile bet was (1) the cost being relatively low given existing experiment infrastructure, and (2) the broader deep learning precedent that deeper networks can unlock major capability jumps."
      },

      {
        type: "h2",
        text: "What they actually scaled"
      },
      {
        type: "p",
        text:
          "The team explored multiple scaling axes—depth, width, and batch size. The main story is depth: scaling network depth from shallow baselines into very deep regimes (eventually up to ~1000 layers for the deepest critics) and observing large, sometimes discontinuous performance jumps at certain depths."
      },
      {
        type: "ul",
        items: [
          "They did not just crank depth once and declare victory—early attempts degraded performance.",
          "The biggest gains appeared at “critical depths,” where doubling depth suddenly unlocked large improvements.",
          "They also tested scaling width and batch size, but depth produced the strongest and most parameter-efficient improvements."
        ]
      },

      {
        type: "h2",
        text: "The key clarification: it’s not “add deep nets to PPO/SAC”"
      },
      {
        type: "p",
        text:
          "One of the most important points from the interview is a warning against the naive takeaway. The conclusion is NOT: “take your favorite RL algorithm (PPO/SAC/etc.) and make the networks huge.” The paper’s scaling behavior depends on both (a) architectural stabilization tricks and (b) using a different learning objective that doesn’t directly optimize rewards."
      },
      {
        type: "p",
        text:
          "In fact, the authors emphasize that their method sits at an intersection between reinforcement learning and self-supervised learning: it is actor-critic and goal-conditioned, but the learning signal looks much closer to representation learning objectives that are known to scale well in other fields."
      },

      {
        type: "h2",
        text: "Why the objective matters: shifting RL toward a classification problem"
      },
      {
        type: "p",
        text:
          "A core insight from the interview: standard value-based RL often relies on TD regression, which is noisy and biased. Their approach shifts the burden of learning toward a contrastive / InfoNCE-style objective—closer to a classification problem than a brittle regression problem."
      },
      {
        type: "p",
        text:
          "Intuitively: instead of learning purely from reward/TD errors, the model learns representations where states and future states from the same trajectory are pulled together and mismatched trajectories are pushed apart. This makes the learning dynamics feel more like the scalable training regimes we already trust in language and vision."
      },

      {
        type: "h2",
        text: "Why “it didn’t work at first”"
      },
      {
        type: "p",
        text:
          "A detail that doesn’t come through in one-line summaries: they didn’t just increase depth and win. Early runs failed—making networks deeper alone degraded performance. Residual connections alone didn’t magically fix everything either."
      },
      {
        type: "p",
        text:
          "The breakthrough came from a specific combination of ingredients: architectural choices (e.g., residual connections, normalization, activation choices) paired with the self-supervised contrastive objective. Once those clicked together, they observed runs where performance was flat for one depth increase, then “skyrocketed” after another depth increase."
      },

      {
        type: "h2",
        text: "Depth vs width: why depth can be more parameter-efficient"
      },
      {
        type: "p",
        text:
          "They also discuss a practical scaling trade-off: scaling width tends to grow parameters roughly quadratically (wider layers increase both incoming and outgoing matrices), while scaling depth grows parameters more linearly. In experiments comparing similar parameter budgets, depth scaling often produced faster and larger improvements than width scaling."
      },
      {
        type: "ul",
        items: [
          "Width scaling: can help, but is parameter-expensive.",
          "Depth scaling: often more parameter-efficient for the same performance gain.",
          "In some settings, scaling depth also appeared more sample-efficient."
        ]
      },

      {
        type: "h2",
        text: "Batch size scaling “turns on” once models are deep enough"
      },
      {
        type: "p",
        text:
          "Another nice interview insight: in traditional RL, increasing batch size often doesn’t help much. One hypothesis they highlight is that batch scaling only becomes effective once the network has enough capacity to absorb it—mirroring observations from other areas of deep learning."
      },
      {
        type: "p",
        text:
          "Empirically, once deep networks became trainable in their setup, scaling batch size started to matter more—suggesting depth can unlock other scaling dimensions rather than acting in isolation."
      },

      {
        type: "h2",
        text: "Data is the other half of the scaling story"
      },
      {
        type: "p",
        text:
          "They repeatedly stress that data is crucial. In online RL, data used to be the bottleneck. Their experiments use GPU-accelerated environments (JAX-based goal-conditioned RL environments) that can generate large volumes of experience in parallel—thousands of trajectories at once."
      },
      {
        type: "p",
        text:
          "One concrete rule-of-thumb mentioned: the dramatic gains only showed up once training crossed on the order of tens of millions of transitions (they specifically call out that major improvements appear after crossing ~50M transitions)."
      },

      {
        type: "h2",
        text: "Compute + practicality: what it costs to run"
      },
      {
        type: "p",
        text:
          "A surprisingly practical note from the interview: even their deepest (1000-layer) experiments were designed to be accessible and could be run on a single 80GB H100 GPU. Of course, deeper nets do increase forward-pass cost, but in many RL settings the bottleneck is experience collection—not pure model inference."
      },
      {
        type: "ul",
        items: [
          "Deeper networks can be slower per step, but data collection can dominate runtime.",
          "You often don’t need 1000 layers to saturate—some environments may reach near-ceiling performance at ~64 layers.",
          "If you had distributed training, there’s an open question of how far the frontier could be pushed."
        ]
      },

      {
        type: "h2",
        text: "Robotics angle: why this might matter outside benchmarks"
      },
      {
        type: "p",
        text:
          "They point out that many of their environments resemble robotics-style problems (goal-conditioned control). The broader pitch is that if goal-conditioned RL can scale without rewards or demonstrations, it could become an alternative to approaches that rely on massive amounts of human supervision."
      },
      {
        type: "p",
        text:
          "That framing is compelling: instead of scaling labeled demos, scale self-supervised interaction data + scalable objectives + stable architectures."
      },

      {
        type: "h2",
        text: "Future directions the interview highlighted"
      },
      {
        type: "ul",
        items: [
          "Deep teacher → shallow student: train frontier-capable deep models, then distill/prune for deployment efficiency.",
          "Push scaling along multiple axes together: depth + width + batch size with sufficient compute.",
          "Better understanding of why classification-style objectives scale more robustly than TD regression in these settings.",
          "Robotics transfer: test whether the same recipe helps on real robots or stronger sim-to-real settings.",
          "Compositional generalization (e.g., “stitching” sub-behaviors) as a complementary path to capability."
        ]
      },

      {
        type: "h2",
        text: "My takeaway"
      },
      {
        type: "p",
        text:
          "The most useful mental model for me is: this work makes RL scale by making it behave more like self-supervised representation learning. The 1000-layer headline is real, but the actual lesson is about the recipe—objective + architecture + enough data—unlocking a scaling regime that classic deep RL objectives rarely reach."
      }
    ]
  }
];

const dateFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: "medium" });

const sortPosts = (items) =>
  [...items].sort((a, b) => new Date(b.date) - new Date(a.date));

export const formatDate = (value) => dateFormatter.format(new Date(value));

export const getAllPosts = () => sortPosts(posts);

export const getPost = (slug) => posts.find((post) => post.slug === slug);

export { posts };
