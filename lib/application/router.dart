import 'package:flutter/widgets.dart';
import 'package:get_it/get_it.dart';
import 'package:go_router/go_router.dart';
import 'package:shopping_app/presentation/pages/cart.dart';
import 'package:shopping_app/presentation/pages/home.dart';
import 'package:shopping_app/presentation/pages/mainpage.dart';
import 'package:shopping_app/presentation/pages/product.dart';
import 'package:shopping_app/presentation/pages/products.dart';

class ApplicationRouter {
  final GetIt sl;
  late final GoRouter router;

  late final GlobalKey<NavigatorState> _rootNavigatorKey;
  late final GlobalKey<NavigatorState> _homeNavigatorKey;
  late final GlobalKey<NavigatorState> _productsNavigatorKey;
  late final GlobalKey<NavigatorState> _cartNavigatorKey;

  ApplicationRouter(this.sl) {
    _rootNavigatorKey = GlobalKey<NavigatorState>();
    _homeNavigatorKey = GlobalKey<NavigatorState>();
    _productsNavigatorKey = GlobalKey<NavigatorState>();
    _cartNavigatorKey = GlobalKey<NavigatorState>();

    router = _buildRouter();
  }

  GoRouter _buildRouter() {
    return GoRouter(
      initialLocation: "/home",
      navigatorKey: _rootNavigatorKey,
      routes: [
        StatefulShellRoute.indexedStack(
          parentNavigatorKey: _rootNavigatorKey,
          builder: (context, state, navigationShell) {
            return MainPage(
              navigationShell: navigationShell,
            );
          },
          branches: [
            StatefulShellBranch(
              navigatorKey: _homeNavigatorKey,
              initialLocation: "/home",
              routes: [
                GoRoute(
                  path: "/home",
                  builder: (context, state) {
                    return const HomePage();
                  },
                ),
              ],
            ),
            StatefulShellBranch(
              navigatorKey: _productsNavigatorKey,
              initialLocation: "/products",
              routes: [
                GoRoute(
                  path: "/products",
                  builder: (context, state) {
                    return const ProductsPage();
                  },
                ),
              ],
            ),
            StatefulShellBranch(
              navigatorKey: _cartNavigatorKey,
              initialLocation: "/cart",
              routes: [
                GoRoute(
                  path: "/cart",
                  builder: (context, state) {
                    return const CartPage();
                  },
                ),
              ],
            ),
          ],
        ),
        GoRoute(
          path: "/products/:id",
          builder: (context, state) {
            final id = int.parse(state.pathParameters["id"]!);
            return ProductPage(id: id);
          },
        ),
      ],
    );
  }
}
