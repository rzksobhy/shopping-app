import 'package:flutter/material.dart';
import 'package:flutter_native_splash/flutter_native_splash.dart';
import 'package:shopping_app/application/router.dart';
import 'package:shopping_app/dependency_injection.dart';

Future<void> main() async {
  WidgetsBinding widgetsBinding = WidgetsFlutterBinding.ensureInitialized();
  FlutterNativeSplash.preserve(widgetsBinding: widgetsBinding);

  await initialDependencies();

  FlutterNativeSplash.remove();

  runApp(Application(
    applicationRouter: sl<ApplicationRouter>(),
  ));
}

class Application extends StatelessWidget {
  final ApplicationRouter applicationRouter;

  const Application({
    super.key,
    required this.applicationRouter,
  });

  Widget _builder(BuildContext context, Widget? child) {
    return NotificationListener<OverscrollIndicatorNotification>(
      onNotification: (OverscrollIndicatorNotification overscroll) {
        overscroll.disallowIndicator();
        return true;
      },
      child: SafeArea(
        child: child ?? const SizedBox(),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      builder: _builder,
      routerConfig: applicationRouter.router,
    );
  }
}
